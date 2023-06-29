import React from 'react'
import logoBlanco from "../public/nuevoLogo-Web-2-BLANCO.png";
import site from "../public/site.png";
import telephone from "../public/phone-call.png";
import email from "../public/email.png";
import Subscribe from './Subscribe';
import Image from 'next/image';

function Footer() {
  return (
    <div>
      <section className='footer'>
        <footer className="top">
          {/* <img src={logoBlanco} /> */}
          <Image
            width={239}
            height={50}
            src={logoBlanco}
          />
          <div className="links">
            <div>
              <h2>Links</h2>
              <a data-scroll="home" href="#home">Home</a>
              <a data-scroll="servicies" href="#servicies">Que hacemos</a>
              <a data-scroll="areas" href="#areas">Areas</a>
              <a data-scroll="team" href="#team">Quienes somos</a>
              <a data-scroll="contact" href="#contact">Contactanos</a>
            </div>
            <div>
              <h2>Estemos en contacto </h2>
              <Subscribe/>
              <div style={{ display: 'flex', gap: '5px'}}> 
                {/* <img src={site}  width={20} height={20}/> */}
                <Image
                  width={20}
                  height={20}
                  src={site}
                />
                <a>Córdoba, Argentina</a>
              </div>
              <div style={{ display: 'flex', gap: '5px'}}>
              <Image
                  width={20}
                  height={20}
                  src={telephone}
                />
                {/* <img src={telephone}  width={20} height={20}/> */}
                <a>+54 (0351) 5169365</a>
              </div>
              <div style={{ display: 'flex', gap: '5px'}}>
                <Image
                  width={20}
                  height={20}
                  src={email}
                />
                {/* <img src={email}  width={20} height={20}/> */}
                <a>onestacompliance@gmail.com</a>
              </div>
            </div>
          </div>
        </footer>
        <footer className="bottom">
          <div className="legal">
            <span> © 2023 All rights reserved </span>
          </div>
          {/* <div className="links">
            <a className="fa-brands fa-github"></a>
            <a className="fa-brands fa-linkedin"></a>
            <a className="fa-brands fa-docker"></a>
          </div> */}
        </footer>
      </section>
    </div>
  )
}

export default Footer
