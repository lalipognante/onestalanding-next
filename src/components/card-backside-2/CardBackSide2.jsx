import React, { useState } from 'react';
import './CardBackSide2.css';

export default function CardBackSide2({ card }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div className='card-color'></div>
          <div className='card-content'>
            <img className={`card-${card.id}`} src={card?.icon} alt={"Icon"} />
            <h6 className='card-title'>{card?.title}</h6>
            <p className='card-description'>{card?.description}</p>
            {card.showLearnMore && (
              <p className='card-learnmore' onClick={handleFlipCard}>
                Leer más {'>'}
              </p>
            )}
          </div>
        </div>
        <div class="flip-card-back">
          <div className='card-content'>
            <p className='card-description'>
              <ul>
                {card.itemsBackSide.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}