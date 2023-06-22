import React from 'react'
export default function TeamCard({ card }) {
  return (
    <div className="team-member-container">
      <div className="team-card-container">
        <div className={`team-card person${card.id}`}>
          <div className={`pro-pic person${card.id}`}></div>
          <div className="desciption-wrap">
            <div className="description">
              <ul>
                {card.curriculum.map((cv, index) => (
                  <li key={index}>{cv}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="team-shadow"></div>
      </div>
      <div className='team-member-name'>
        {card?.name}
      </div>
      <div className='team-member-position'>
        {card?.position}
      </div>
      <div className='team-member-contact'>
        <a className="fa-brands fa-linkedin"></a>
        <a className="fa fa-envelope"></a>
      </div>
    </div>
  )
}

