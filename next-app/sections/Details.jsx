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
                En la Argentina, al igual de lo que sucede en los principales países de la región resulta necesaria la observación y el cumplimiento de la Ley Nacional 27.401 de Responsabilidad Penal de las Personas Jurídicas por Delitos de Corrupción, que permitirá mitigar el riesgo de la comisión de delitos y eximir de responsabilidad a la persona jurídica si actúa diligentemente y en cumplimiento de los postulados.
              </p>
              <p className='text details'>
                Es por ello que para poder prevenir y evitar futuras consecuencias más gravosas ha tomado relevancia la función de “Compliance”
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
