import React from 'react'
import './Card.css'
const Card = ({name,price,availability,imgeurl}) => {
  return (
    <div className='Container'>
      <div className='inn'>
      <p><b>{name}</b></p>
      <p>{price}</p>
      <p>{availability}</p>
      <p><img src={imgeurl} alt="photo" height="200px" width="200px" /></p>
    </div>
    </div>
  )
}
export default Card