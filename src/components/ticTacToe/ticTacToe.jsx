import { useState, useEffect } from 'react';
import Square from './square'
import style from './ticTacToe.module.css'

function TicTacToe() {
    const size = 3;
    const winningMoves = [[0, 1, 2],[3, 4, 5], [6, 7, 8], [0, 3, 6],[1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    const gameGrid = Array.from({ length: size * size }).fill(null);

    const [gameData, setGameData] = useState(gameGrid);
    const [isX, setIsX] = useState(false);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        checkWinner();
    }, [gameData])
    

    const cellClickedHandler = (i) => {
        if (gameData[i] === null && winner === null) {
            setGameData((currentValue) => {
                const _currentValue = [...currentValue];
                _currentValue[i] = isX ? 1 : 0
                return _currentValue
            })
        }
       
    }

    const checkWinner = () => {
        setIsX(!isX);
        for (let index = 0; index < winningMoves.length; index++) {
            const [a,b,c] = winningMoves[index];
            if(gameData[a] !== null && gameData[a] === gameData[b] && gameData[a] === gameData[c]) {
                setWinner(()=> {
                    return gameData[a] === '1' ? 'X' : 'O'
                })
            }
        }
    }

    return (
        <>
            <div className={style.gameContainer}>
                {
                    gameData.map((value, i) => (
                        <Square key={i} squareId={i} squareValue={value} cellClicked={cellClickedHandler} />
                    ))
                }
            </div>

            {winner && <div>
                WiNNERRR: {winner}
            </div>}
        </>
    )
}
export default TicTacToe;