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
      <Link to='/' className='back-home'><i className="bi bi-arrow-bar-left">Seguir comprando</i></Link>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <div className='cont-fin'>
        <h1 className='price'>Total: {totalPrice()}</h1>
        <Link to='/checkout' ><button className='btn-fin'>Finalizar Compra</button></Link>
      </div>
    </>
  )
}

export default Cart