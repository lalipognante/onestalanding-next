import React from 'react'
import './ContactBanner.css'
import Subscribe from '../../components/subscribe/Subscribe';

export const ContactBanner = () => {
  return (
    <>
      <section id='contact' className="contact-banner">
        <div className='banner-text'>
          <h4 className='title banner'>Estemos en contacto </h4>
          <p className='text banner'>Ingresa tu email para estar en contacto y te enviaremos información sobre como implementar nuestros servicios.</p>
        </div>
        <div className='banner-subscribe'>
          <Subscribe />
        </div>
      </section>
    </>
  );
};
