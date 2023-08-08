import React from 'react'
import './title.css'

const Title = ({ greeting }) => {
  return (
    <>
      <div className='container-title'>
        <h1 className='title'>{greeting}</h1>
        <p className='txt'>La mejor galeria de arte</p>
      </div>
    </>
    

  )
}

export default Title