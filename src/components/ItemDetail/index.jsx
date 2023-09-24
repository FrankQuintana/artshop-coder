import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext';
import './itemDetail.css'
import ItemCount from '../ItemCount'
import { Link } from 'react-router-dom';

const ItemDetail = ({ data }) => {
  const [goCart, setGoCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoCart(true);
    addProduct(data, quantity);
  }
  return (
    <div className="detail__container">
        <div className="detail">
            <Link to='/' className='back-detail'>
              <i className="bi bi-arrow-bar-left"></i>
            </Link>
            <img className="detail__img" src={data.image} alt={data.title} />
            <div className="content-detail">
                <h1 className='title-detail'>{data.title}</h1>
                <p className='desc-detail'>{data.desc}</p>
                <p className='price-detail'>${data.price}</p>
                {
                  goCart
                    ? <Link to='/cart'><button className='btn-detail'>Terminar compra</button></Link>
                    : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                }
            </div>
        </div>
    </div>
  )
}

export default ItemDetail