'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function CardBack({ card }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className='card-color'></div>
          <div className='card-content'>
            {/* <img className={`card-${card.id}`} src={card?.icon} alt={"Icon"} /> */}
            <Image
              width={45}
              height={45}
              className={`card-${card.id}`}
              src={card?.icon}
            />
            <h6 className='card-title'>{card?.title}</h6>
            <p className='card-description'>{card?.description}</p>
            {card.showLearnMore && (
              <p className='card-learnmore' onClick={handleFlipCard}>
                Leer más {'>'}
              </p>
            )}
          </div>
        </div>
        <div className="flip-card-back">
          <div className='card-content'>
            <div className='card-description'>
              <ul>
                {card.itemsBackSide.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}