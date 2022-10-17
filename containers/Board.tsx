import React, { useState, useEffect } from "react";
import Square from "../components/Square";
import { Player } from "../interfaces";
import findWinner from "../utility/findWinner";
import setSquareValue from "../utility/setSquareValue";

const Board = () => {
  const [squares, setSquares] = useState<Player[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"noughts" | "crosses">(
    Math.round(Math.random() * 1) === 1 ? "noughts" : "crosses"
  );
  const [winner, setWinner] = useState<Player>(null);

  useEffect(() => {
    const winner = findWinner(squares);
    if (winner) setWinner(winner);

    if (!winner && !squares.filter((square) => !square).length)
      setWinner("DRAW");
  }, [squares]);

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(
      Math.round(Math.random() * 1) === 1 ? "noughts" : "crosses"
    );
  };

  return (
    <>
      {!winner && <h3>{`It's your move ${currentPlayer}`}</h3> }
      {winner && winner !== "DRAW" && <h3>{`Ultimate Victory! ${winner}`}</h3> }
      {winner==='DRAW' && <h3>This Game Has Ended In A Draw</h3> }
      <div className="grid">
        {Array(9)
          .fill(null)
          .map((_, index) => {
            return (
              <Square
                key={index}
                onClick={() =>
                  setSquareValue(
                    index,
                    squares,
                    setSquares,
                    setCurrentPlayer,
                    currentPlayer
                  )
                }
                value={squares[index]}
                winner={winner}
              />
            );
          })}
      </div>
      <button className="reset" onClick={handleReset}>
        RESET GAME
      </button>
    </>
  );
};

export default Board;
