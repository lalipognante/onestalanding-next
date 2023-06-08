import React from 'react'
import './Footer.css';
import logoBlanco from "./nuevoLogo-Web-2-BLANCO.png";
import site from "./site.png";
import telephone from "./phone-call.png";
import email from "./email.png";
import Subscribe from '../subscribe/Subscribe';

function Footer() {
  return (
    <div>
      <section className='footer'>
        <footer class="top">
          <img src={logoBlanco} />
          <div class="links">
            <div>
              <h2>Links</h2>
              <a>Home</a>
              <a>Que hacemos</a>
              <a>Relevancia del Compliance</a>
              <a>Quienes somos</a>
              <a>Contactanos</a>
            </div>
            {/* <div>
              <h2>Servicios</h2>
              <a>Matriz de Riesgo</a>
              <a>Capacitación</a>
              <a>Programas de Integridad</a>
              <a>Alineamientos ISO</a>
              <a>Asesoramiento Externo</a>
            </div> */}
            <div>
              <h2>Estemos en contacto </h2>
              <Subscribe/>
              {/* <Subscribe /> */}
              <div style={{ display: 'flex', gap: '5px'}}> 
                <img src={site}  width={20} height={20}/>
                <a>Barrio Alto Alberdi, Córdoba Argentina</a>
              </div>
              <div style={{ display: 'flex', gap: '5px'}}>
                <img src={telephone}  width={20} height={20}/>
                <a>+54 (0351) 4807456</a>
              </div>
              <div style={{ display: 'flex', gap: '5px'}}>
                <img src={email}  width={20} height={20}/>
                <a>info@onesta.com</a>
              </div>
            </div>
          </div>
        </footer>
        <footer class="bottom">
          <div class="legal">
            <span> © 2023 All rights reserved </span>
          </div>
          <div class="links">
            <a class="fa-brands fa-github"></a>
            <a class="fa-brands fa-linkedin"></a>
            <a class="fa-brands fa-docker"></a>
          </div>
        </footer>
      </section>
    </div>
  )
}

export default Footer
