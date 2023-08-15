import React from 'react'
import './title.css'

const Title = ({ greeting }) => {
  return (
    <>
      <div className='container-title'>
        <img className='fondo' src='../src/assets/fondo.jpg'/>
        <div className='content'>
          <h1 className='title'>{greeting}</h1>
          <p className='txt'>Galeria de arte moderno, diseños inimaginables...</p>
        </div>
      </div>
    </>
    

  )
}

export default Title