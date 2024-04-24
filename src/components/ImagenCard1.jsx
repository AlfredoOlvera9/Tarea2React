import React from 'react'
import imagen1 from '../images/wow.jpg'

function ImagenCard1() {

  return (
    <div className='card'>
        <img src={imagen1} alt='Imagen de wow'/>
        <p>World of Warcraft es un juego online en el que los jugadores crean un personaje y exploran un mundo virtual lleno de misiones, aventuras y desafíos.
          Los jugadores pueden formar grupos para completar misiones juntos y enfrentarse a jefes poderosos </p>
    
    </div>
  )
}

export default ImagenCard1