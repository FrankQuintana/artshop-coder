import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

const Item = ({ info }) => {
  return (
    <Link to={`/detalle/${info.id}`} className='item-cont'>
        <img src={info.image} alt=''/>
        <p>{info.title}</p>
        <p>hola</p>
    </Link>
  )
}

export default Item