/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'

const ItemConst = ({ inicial, max, onAdd}) => {
    const[count,setCount] = useState()
    const sumar = () => {
      if (count < max){
      setCount(count + 1)
    } else{
      alert('No hay mas stock')}
    }
    const restar = () => {
      if (count > min){
      setCount(count - 1)
    } else{
       alert('No puedes descontar mas productos')
    }


  return (
    <div>  
    <h2>{count}</h2>
    <bottom onclick={sumar}>+</bottom>
    <bottom onclick={restar}>-</bottom>
    <bottom onclick={() => onAdd(count)}>sumar al carrito</bottom>
    </div>
  )
}

export default ItemConst