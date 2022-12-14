import { Player } from "../interfaces";

 const findWinner = (squares : Player[]) => {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8],
    ]

    for(let item of lines){
        const [a,b,c] = item
        if(squares[a] && squares[a] === squares[b] && squares[a]===squares[c]){
            return squares[a];
        }
    }
    return null;
  }

  export default findWinner