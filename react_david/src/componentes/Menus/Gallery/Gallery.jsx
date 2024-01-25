import React from 'react'

function Gallery({arrayObjeto}) {

  return (
    <div>
      {arrayObjeto.map((elemento,index)=>(
        <ul key={index}>
          <li>{elemento.card.title}</li>
          <li>{elemento.card.discount}</li>
          <li>{elemento.card.price}</li>
          <li>{elemento.card.tag}</li>
          <li><img src={elemento.card.img} alt="foto" /></li>

        </ul>
      ))}
    </div>
    
  )
}

export default Gallery