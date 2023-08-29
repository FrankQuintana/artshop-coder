import React from 'react'
import Item from '../Item'

const ItemList = ({ data = [] }) => {
  return (
   data.map(arte => <Item key={arte.id} info={arte} />)
  )
}

export default ItemList