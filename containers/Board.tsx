import React, { useState } from "react";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<'noughts' | 'crosses'>((Math.round(Math.random() * 1) === 1 ? 'noughts' : 'crosses'))

  return <div>Board</div>;
};

export default Board;
