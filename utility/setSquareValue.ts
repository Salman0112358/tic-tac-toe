import { Player } from "../interfaces";

const setSquareValue = (index : number, squares : Player[], setSquares : React.Dispatch<React.SetStateAction<Player[]>>, setCurrentPlayer : React.Dispatch<React.SetStateAction<"noughts" | "crosses">>, currentPlayer : ("noughts" | "crosses")) => {
    const newData = squares.map((value, i) => {
        if (i === index ){
            return currentPlayer;
        }
        return value;
    })
    setSquares(newData)
    setCurrentPlayer(currentPlayer === 'noughts' ? 'crosses' : 'noughts' )
  }

  export default setSquareValue