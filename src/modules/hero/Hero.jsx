import React from 'react'
import './Hero.css'

export const Hero = () => {
  return (
    <>
      <section id='home' className='content'>
        <div className='new-container'>
              <h4 className='title hero'>SERVICIOS INTEGRALES</h4>
              <h1 className='subtitle hero' >Ethics and Compliance</h1>
              <p className='text hero'>Creemos firmemente que implementar un programa de compliance o integridad es el mejor mecanismo para gestionar exitosamente los riesgos inherentes a la actividad propia de la organización, y de esa manera intentar prevenir o mitigar las consecuencias patrimoniales, reputacionales y jurídicas que estos pueden generar.</p>
              <div class="mouse-wheel-wrap">
                <a class="mouse-wheel js-mouse-wheel" href="#">
                  <span class="mouse-wheel__inner"></span>
                </a>
                <span class="mouse-wheel__down">
                  <i class="fa-solid fa-chevron-down fa-xs" style={{ color: '#ffffff' }}></i>
                </span>
              </div>
            </div>
      </section>
    </>
  );
};
