import React from 'react'
import whatsapp from "../public/whatsapp.png";
import Image from 'next/image';

export default function Whatsapp({ card }) {
  return (
    <div>
      <a href="https://wa.me/3468560635?text=Quiero%20información%20sobre%20servicios" rel="noopener" target="_blank">
        <div class="whatsapp-button">
          <div class="text">
            <p class="desktop">Contacta a nuestro equipo</p>
            <p class="mobile">Contactanos</p>
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
