import React from 'react'
import './Card.css';
export default function Card({ card }) {
  return (
    <div className='card'>
      <div className='card-color'></div>
      <div  className='card-content'>
        <img className={`card-${card.id}`} src={card?.icon} alt={"Icon"}/>
        <h6 className='card-title'>{card?.title}</h6>
        <p className='card-description'>{card?.description}</p>
        {card.showLearnMore && (
          <p className='card-learnmore'>Leer más</p>
        )}
      </div>
    </div>
  )
}
