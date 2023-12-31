import React from 'react'
import './cartWidget.css'
import { useCartContext } from '../../context/CartContext'

const CartWidget = () => {
  const { totalProducts } = useCartContext();
  return (
    <i className="icon bi bi-bag-check">
      <span className='number'>{totalProducts() || "0"}</span>
    </i>
  )
}

export default CartWidget