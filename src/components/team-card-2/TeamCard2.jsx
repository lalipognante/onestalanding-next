import React from 'react'
import './TeamCard2.css';
export default function TeamCard2({ card }) {
  return (
    <div class="team-member-container">
      <div class="team-card-container">
        {/* <div class="team-card"></div> */}
        <div class="team-card">
          <div class="pro-pic"></div>
          <div class="desciption-wrap">
            <div class="description">
              {/* <h3>Marina Smith</h3>
              <h4>FrontEnd Developer</h4> */}
              <ul>
                <li>Abogado (U.C.C)</li>
                <li>Especialista en Derecho Penal Económico (U.B.P)</li>
                <li>Diplomado en Crimen Organizado, Corrupción y Terrorismo (Univ. De Salamanca, España)</li>
                <li>Programa en Compliance y Prevención de la Corrupción Corporativa (Univ. S21)</li>
                <li>Certificación Internacional en Ética y Compliance (AAEC)</li>
              </ul>
              {/* <ul>
                <li><a class="fa fa-envelope"></a></li>
                <li><a class="fa-brands fa-linkedin"></a></li>
                <li><a class="fa-brands fa-docker"></a></li>
              </ul> */}
            </div>
          </div>
        </div>
        <div class="team-shadow"></div>
      </div>
      <div className='team-member-name'>
        {card?.name}
      </div>
      <div className='team-member-position'>
        {card?.position}
      </div>
      <div className='team-member-contact'>
        <a class="fa-brands fa-linkedin"></a>
        <a class="fa fa-envelope"></a>
      </div>
    </div>
    // <div class="container">
    //   <div class="column">
    //     <div class="card">
    //       <div class="pro-pic"></div>
    //       <div class="desciption-wrap">
    //         <div class="description">
    //           <h3>Marina Smith</h3>
    //           <h4>FrontEnd Developer</h4>
    //           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    //           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
    //           <ul>
    //             <li><a href="#"><img src="images/facebook.png"/></a></li>
    //             <li><a href="#"><img src="images/instagram.png"/></a></li>
    //             <li><a href="#"><img src="images/linkedin.png"/></a></li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

{/* <div className='team-name'>
          {card?.name}
        </div>
        <div  className='team-position'>
          {card?.position}
        </div> */}

