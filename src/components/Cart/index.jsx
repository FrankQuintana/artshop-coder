import React from 'react'
import './cart.css'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart'

const Cart = () => {
  const {cart, totalPrice} = useCartContext();

  if (cart.length === 0) {
    return(
      <>
        <div className="cart-cont">
          <p className='text-cart'>No hay productos</p>
          <Link to='/'><button className='btn-cart'>Comprar productos</button></Link>
        </div>
      </>
    );
  }

  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <h1 className='price'>Total: {totalPrice()}</h1>
    </>
  )
}

export default Cart