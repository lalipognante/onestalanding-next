import React from 'react'
export default function TeamCard({ card }) {
  return (
    <div className="team-member-container">
      <div className="team-card-container">
        {/* <div className="team-card"></div> */}
        <div className="team-card">
          <div className="pro-pic"></div>
          <div className="desciption-wrap">
            <div className="description">
              <ul>
                <li>Abogado (U.C.C)</li>
                <li>Especialista en Derecho Penal Económico (U.B.P)</li>
                <li>Diplomado en Crimen Organizado, Corrupción y Terrorismo (Univ. De Salamanca, España)</li>
                <li>Programa en Compliance y Prevención de la Corrupción Corporativa (Univ. S21)</li>
                <li>Certificación Internacional en Ética y Compliance (AAEC)</li>
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

