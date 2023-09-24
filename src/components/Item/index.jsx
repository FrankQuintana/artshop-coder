import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

const Item = ({ info }) => {
  return (
    <div className='item-cont'>
      <img src={info.image} alt=''/>
      <h1 className='title-it'>{info.title}</h1>
      <p className='text-it'>${info.price}</p>
      <Link to={`/detalle/${info.id}`} >
          <button className='boton-it'>+ Info</button>
      </Link>
    </div>
  )
}

export default Item