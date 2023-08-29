import React from 'react'
import Title from '../Title'
import ItemCount from '../ItemCount'

const ItemListContainer = () => {

  const onAdd = (quantity) => {
    console.log('compraste ${quantity} unidades');
  }
  return (
    <>
      <Title greeting='ART-SHOP' />
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </>
  )
}

export default ItemListContainer