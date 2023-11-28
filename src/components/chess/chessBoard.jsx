import React, { useState } from 'react';
import style from './chess.module.css'
// import './App.css'; // Import your CSS file

function Chessboard() {
  const gridSize = 8;
  const [selectedCells, setSelectedCells] = useState([]);
  
  // Calculate the size of the board based on window dimensions
  const size = Math.min(window.innerWidth, window.innerHeight - 100) - 50;
  
  const createBoard = () => {
    const board = [];
    for (let i = 0; i < gridSize; i++) {
      const row = [];
      for (let j = 0; j < gridSize; j++) {
        row.push(
          <button
            key={`${i}-${j}`}
            className={`${style.btn} box ${selectedCells.includes(`${i}-${j}`) ? 'selected' : ''}`}

            // className={style.btn, `box ${selectedCells.includes(`${i}-${j}`) ? 'selected' : ''}`}
            data-x={i}
            data-y={j}
            onClick={onClick}
          />
        );
      }
      board.push(<div key={i} className="row">{row}</div>);
    }
    return board;
  };

  const onClick = (event) => {
    const element = event.target;
    const x = +element.getAttribute('data-x');
    const y = +element.getAttribute('data-y');
    const newSelectedCells = [`${x}-${y}`];

    for (let i = x - 1, offset = 1, col = y; i >= 0; i--, offset++) {
      newSelectedCells.push(`${i}-${col - offset}`);
      newSelectedCells.push(`${i}-${col + offset}`);
    }

    for (let i = x + 1, offset = 1, col = y; i < gridSize; i++, offset++) {
      newSelectedCells.push(`${i}-${col - offset}`);
      newSelectedCells.push(`${i}-${col + offset}`);
    }

    setSelectedCells(newSelectedCells);
  };

  return (
    <div className="board" style={{ width: size + 'px', height: size + 'px' }}>
      {createBoard()}
    </div>
  );
}

export default Chessboard;
