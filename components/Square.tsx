import React from 'react'
import {ImCross} from 'react-icons/im'
import {BiCircle} from 'react-icons/bi'
import { ISquare } from '../interfaces';




const iconSize = 50;

const Square = ({value, onClick, winner} : ISquare) => {

    if (!value) return <button className='square' onClick={onClick} disabled={Boolean(winner)}/>

  return (
    <button className={`square square_${value.toLocaleLowerCase()}`} disabled>{value=== 'crosses' ? <ImCross size={iconSize}/> : <BiCircle size={iconSize}/> }</button>
  )
}

export default Square