import React from 'react'
import {ImCross} from 'react-icons/im'
import {BiCircle} from 'react-icons/bi'
type Player = 'noughts' | 'crosses' | null

interface ISquare {
    value : Player,
    onClick : () => void,
    winner : Player,

}

const Square = ({value, onClick, winner} : ISquare) => {

    if (!value) return <button className='square' onClick={onClick} disabled={Boolean(winner)}/>

  return (
    <button className={`square square_${value.toLocaleLowerCase()}`} disabled>{value=== 'crosses' ? <ImCross/> : <BiCircle/> }</button>
  )
}

export default Square