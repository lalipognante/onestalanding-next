import React from 'react'
import './TeamCard.css';
export default function TeamCard({ card }) {
  return (
    <div class="team-member-container">
      <div class="team-card-container">
        <div class="team-card"></div>
        <div class="team-shadow"></div>
      </div>
      <div className='team-member-name'>
        {card?.name}
      </div>
      <div className='team-member-position'>
        {card?.position}
      </div>
      </div>
  )
}

{/* <div className='team-name'>
          {card?.name}
        </div>
        <div  className='team-position'>
          {card?.position}
        </div> */}

