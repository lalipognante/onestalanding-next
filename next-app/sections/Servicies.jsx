import React from 'react'
import icon1 from "../public/icon1-recortado.png";
import icon2 from "../public/icon2-recortado.png";
import icon3 from "../public/icon3-recortado.png";
import icon4 from "../public/icon4-recortado.png";
import icon5 from "../public/icon5-recortado.png";
import CardBack from './CardBack';
import Bar from './Bar';
import Card from './Card';

export const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Matriz de Riesgo',
      icon: icon1,
      description: 'Detección de los distintos riesgos que afrontará la compañía de acuerdo a la actividad que esta desarrolle y elaboración de una matriz que los contemple.',
      showLearnMore: true,
      itemsBackSide: [
        'Entrevistas personalizadas y cuestionarios de diagnóstico',
        'Revisión y actualización de los riesgos a gestionar'
      ]
    },
    {
      id: 2,
      title: 'Capacitación',
      icon: icon2,
      description: 'Capacitación sobre el cumplimiento del programa de integridad a los distintos miembros de la dirección empresarial y empleados, utilizando métodos didácticos.',
      showLearnMore: true,
      itemsBackSide: [
        'Seminarios de capacitación al staff jerárquico',
        'Capacitaciones diseñadas a la medida de cada área y/o sector',
        'Evaluación de aprendizaje y ajuste de los métodos empleados'
      ]
    },
    {
      id: 3,
      title: 'Programas de Integridad',
      icon: icon3,
      description: 'Diseño e implementación de programas de integridad a medida de las características de la empresa, cuyo cumplimiento permitirá minimizar los riesgos detectados.',
      showLearnMore: true,
      itemsBackSide: [
        'Diseño o renovación de código de ética',
        'Elaboración de políticas internas en todas las temáticas requeridas',
        'Protocolos de interacción con la administración pública'
      ]
    },
    {
      id: 4,
      title: 'Alineamientos ISO',
      icon: icon4,
      description: 'Acompañamiento para la certificación con estándares internacionales ISO 37001 (Sistema de Gestión Anticorrupción) e ISO 37301 (Sistema de Gestión de Compliance).',
      showLearnMore: false
    },
    {
      id: 5,
      title: 'Asesoramiento Externo',
      icon: icon5,
      description: 'Apoyo externo permanente para la gestión del programa de integridad que fue diseñado para la compañía.',
      showLearnMore: false
    }
  ]

  return (
    <>
      <section id='servicies' className="services-content">
        <div className='new-container services'>
          <div className='services-text-container'>
            <h4 className='title'>QUE HACEMOS ?</h4>
            <h1 className='subtitle blue' >NUESTROS SERVICIOS</h1>
            <Bar />
          </div>
          <div className='card-container'>
            {services.map((card, index) => {
              if (card.showLearnMore) {
                return <CardBack key={card.id} card={card} />
              } else {
                return <Card key={card.id} card={card} />
              }
            }
            )}
          </div>
        </div>
      </section>
    </>
  );
};
