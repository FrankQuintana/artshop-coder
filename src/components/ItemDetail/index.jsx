import React from 'react'
import './itemDetail.css'
import ItemCount from '../ItemCount'

const ItemDetail = ({ data }) => {

  const onAdd = (quantity) => {
    console.log(`compraste ${ quantity } unidades`);
  }
  return (
    <div className="detail__container">
        <div className="detail">
            <img className="detail__img" src={data.image} alt={data.title} />
            <div className="content">
                <h1 className='title-detail'>{data.title}</h1>
                <ItemCount initial={1} stock={5} onAdd={onAdd} />
            </div>
        </div>
    </div>
  )
}

export default ItemDetail