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
                <h1 className='ref-title'>Gracias por tu compra</h1>
                <p className='ref-txt'>Tu número de pedido es: <b> {pedidoId} </b></p>
            </div>
        )
    }

  return (
    <div className='checkout'>
        <div className='container-form'>
            <h1>Checkout</h1>
            <form className='formulary' onSubmit={handleSubmit(comprar)}>
                <label>Nombre y Apellido</label>
                <input type="text" className='form-input' required {...register("nombre")}/>
                <label>Correo</label>
                <input type="email" className='form-input' required {...register("email")}/>
                <label>Telefono</label>
                <input type="text" className='form-input' required {...register("telefono")}/>

                <button type="submit" className='form-boton'>Comprar</button>
            </form>
        </div>
    </div>
  )
}

export default Checkout