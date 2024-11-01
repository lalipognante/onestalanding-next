import React from 'react'
import Bar from './Bar';
import Image from 'next/image';

export const Details = () => {
  return (
    <>
      <section id='details' className='content details'>
        <div className="new-container">
          <div className="row2 details">
            <div className='left details'>
              <div className="logo-onesta">
                {/* <img alt={"imagen 1"} src={image1} /> */}
                <Image
                  width={320}
                  height={280}
                  src="/manosLogo2.png"
                />
              </div>
              <h4 className='title details'>RELEVANCIA DEL COMPLIANCE</h4>
              <h1 className='subtitle blue details' >COMPLIANCE</h1>
              <Bar />
              <p className='text details'>
                En Argentina, al igual que en los principales países de la región, resulta esencial observar y cumplir con la Ley Nacional 27.401 de Responsabilidad Penal de las Personas Jurídicas por Delitos de Corrupción. Esta normativa permite mitigar el riesgo de comisión de delitos y eximir de responsabilidad a la persona jurídica que actúe con diligencia y en conformidad con sus disposiciones.
              </p>
              <p className='text details'>
                Por ello, la función de 'Compliance' ha cobrado relevancia para prevenir y evitar consecuencias más gravosas en el futuro.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
