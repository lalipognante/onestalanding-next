import React from 'react'
import Image from 'next/image';

export default function Card({ card }) {
  return (
    <div className='card'>
      <div className='card-color'></div>
      <div  className='card-content'>
        {/* <img className={`card-${card.id}`} src={card?.icon} alt={"Icon"}/> */}
        <Image
          width={45}
          height={45}
          className={`card-${card.id}`}
          src={card?.icon}
        />
        <h6 className='card-title'>{card?.title}</h6>
        <p className='card-description'>{card?.description}</p>
        {card.showLearnMore && (
          <p className='card-learnmore'>Leer más</p>
        )}
      </div>
    </div>
  )
}