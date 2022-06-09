import React from 'react'

const ItemList = ({personajes}) => {
  return (
    <div>
      {personajes? .map(personaje => <Item key={personaje.id} personaje={personaje} />)};
    </div>
  )
}

export default ItemList