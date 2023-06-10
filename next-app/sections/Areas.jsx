import React from 'react'
import icon1 from "../public/icon-1.png";
import icon2 from "../public/icon-2.png";
import icon3 from "../public/icon-3.png";
import icon4 from "../public/icon-4.png";
import icon5 from "../public/icon-5.png";
import icon6 from "../public/icon-6.png";
import Image from 'next/image';
import Bar from './Bar';

export default function Areas() {
  const areas = [
    {
      id: 1,
      title: 'Anticorrupción',
      icon: icon1
    },
    {
      id: 2,
      title: 'Prevención de lavado de Activos',
      icon: icon2
    },
    {
      id: 3,
      title: 'Conflictos de interés',
      icon: icon3
    },
    {
      id: 4,
      title: 'Información Confidencial y Datos Personales',
      icon: icon4
    },
    {
      id: 5,
      title: 'Investigaciones internas',
      icon: icon5
    },
    {
      id: 6,
      title: 'Judicialización de denuncias recibidas a través de línea ética',
      icon: icon6
    }
  ]
  return (
    <>
      <section id='areas' className="areas-content">
        <div className="new-container">
          <div className='areas-text-container'>
            <h4 className='title areas'>COMO LO HACEMOS ?</h4>
            <h1 className='subtitle blue areas' >AREAS DE ESPECIALIDAD</h1>
            <Bar />
          </div>
          <div className="contenedor">
            {areas.map((area, index) => (
              <div className="icon-container" key={area.id}>
                {/* <img className="icon-box"src={area?.icon} alt={"Icon"}/> */}
                <Image
                  width={90}
                  height={90}
                  src={area?.icon}
                />
                <div className="title-box"> {area.title} </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
