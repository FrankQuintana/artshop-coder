import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useCartContext } from '../../context/CartContext'
import { collection, addDoc } from 'firebase/firestore'
import db from '../../firebase/config';
import './checkout.css';

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");
    const {cart, totalPrice, clearCart} = useCartContext();

    const { register, handleSubmit } = useForm();
    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: cart,
            total: totalPrice()
        }

        const pedidosRef = collection(db, 'pedidos');
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                clearCart();
            })
    }

    if (pedidoId) {
        return (
            <div className='cont-ref'>
                <h1>Gracias por tu compra</h1>
                <p>Tu numero de pedido es: {pedidoId}</p>
            </div>
        )
    }

  return (
    <div className='container-form'>
        <h1>Checkout</h1>
        <form className='formulary' onSubmit={handleSubmit(comprar)}>
            <label>Nombre y Apellido</label>
            <input type="text" className='form-input' {...register("nombre")}/>
            <label>Correo</label>
            <input type="email" className='form-input' {...register("email")}/>
            <label>Telefono</label>
            <input type="text" className='form-input' {...register("telefono")}/>

            <button type="submit" className='form-boton'>Comprar</button>
        </form>
    </div>
  )
}

export default Checkout