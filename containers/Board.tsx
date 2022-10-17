import React, { useState } from "react";
import Square from "../components/Square";

type Player = 'noughts' | 'crosses' | null

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
    setWinner(null);
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "noughts" : "crosses");
  }

  const findWinner = (squares : Player[]) => {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let item of lines){
        const [a,b,c] = item
        if(squares[a] && squares[a] === squares[b] && squares[a]===squares[c]){
            return squares[a];
        }
    }
    return null;
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
