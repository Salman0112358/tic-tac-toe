import React, { useState } from "react";
import Square from "../components/Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"noughts" | "crosses">(
    Math.round(Math.random() * 1) === 1 ? "noughts" : "crosses"
  );
  const [winner, setWinner] = useState(null);

  const setSquareValue = (index : number) => {
    const newData = squares.map((value, i) => {
        if (i === index ){
            return currentPlayer;
        }
        return value;
    })
    setSquares(newData)
    setCurrentPlayer(currentPlayer === 'noughts' ? 'crosses' : 'noughts' )
  }

  const handleReset = () => {
    setSquares(Array(9).fill(null));
  }

  return (
    <>
      <h3>{`It's your move ${currentPlayer}`}</h3>
      <div className="grid">
      {Array(9)
        .fill(null)
        .map((_, index) => {
          return (
              <Square 
              key={index} 
              onClick={() => setSquareValue(index)}
              value={squares[index]}
              winner={winner}
              />
          )
        })}
      </div>
      <button className="reset" onClick={handleReset}>
        RESET GAME
      </button>
    </>
  );
};

export default Board;
