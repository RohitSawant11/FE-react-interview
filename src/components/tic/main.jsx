import { useState,useEffect } from "react";
import Sqaure from "./sqaure";
import style from './main.module.css';

function MainTic() {
    const size = 9;
    const winningMoves = [[0, 1, 2],[3, 4, 5], [6, 7, 8], [0, 3, 6],[1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    const [sqaure, setSquare] = useState(Array.from({length: size}).fill(undefined));
    const [isX, setIsX] = useState(true);
    const [winner, setWinner] = useState('');


    const sqaureClickedHandler = (id) => {
        if(sqaure[id] !== undefined || winner ) return;
        setSquare((prev) => {
            const _prev = [...prev];
            _prev[id] = isX ? 1 : 0;
            return _prev;
        })
        setIsX(!isX);
    }

    useEffect(() => {
      checkWinner();
    }, [sqaure]);
    

    const checkWinner = () => {
        for (let index = 0; index < winningMoves.length; index++) {
            let [a,b,c] = winningMoves[index];
            console.log(sqaure.includes(undefined));
            if(sqaure[a] !== undefined && sqaure[a] === sqaure[b] && sqaure[a] === sqaure[c]) {
                setWinner(sqaure[a] === 1 ? 'Winner is X' : 'Winner is O');
            } else if(!sqaure.includes(undefined)) {
                setWinner('Draw')
            }
        }
    }

    return (

        <div>
            <div>
                <span>Next Move: {isX ? 'X' : 'O'}</span>
                <span>Result:{winner}</span>
            </div>

            <div className={style.square__wrapper}>
                {
                    sqaure.map((data,i) => (
                        <Sqaure key={i}  sqaureId={i} onClick={sqaureClickedHandler} value={data}/>
                    ))
                }
            </div>
        </div>
    )
}

export default MainTic;