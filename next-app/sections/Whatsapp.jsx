import React from 'react'
import whatsapp from "../public/whatsapp.png";
import Image from 'next/image';

export default function Whatsapp({ card }) {
  return (
    <div>
      <a href="https://wa.me/3515169365?text=Hola,%20estoy%20interesado%20en%20conocer%20más%20sobre%20los%20servicios%20de%20ONESTÁ.%20¿Podrías%20brindarme%20más%20información?%20¡Gracias!" rel="noopener" target="_blank">
        <div className="whatsapp-button">
          <div className="text">
            <p className="desktop">Contacta a nuestro equipo</p>
            <p className="mobile">Contactanos</p>
          </div>
          {/* <img alt="Whatsapp" src={whatsapp} /> */}
          <Image
            width={24}
            height={24}
            src={whatsapp}
          />
        </div>
      </a>
    </div>
  )
}
