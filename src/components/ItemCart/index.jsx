import React from 'react'
import './itemCart.css'
import { useCartContext } from '../../context/CartContext'

const CartItem = ({ product }) => {
    const { deleteProduct } = useCartContext();

  return (
    <div className='itemcart'>
        <img src={product.img} alt={product.title} />
        <div className='content-ic'>
            <p>Nombre: {product.title}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio c/u: ${product.price}</p>
            <p>Subtotal: ${product.quantity * product.price}</p>
            <button onClick={() => deleteProduct(product.id)}><i class="bi bi-trash btn"></i></button>
        </div>
    </div>
  )
}

export default CartItem