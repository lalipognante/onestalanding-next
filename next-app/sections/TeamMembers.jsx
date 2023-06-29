import React from 'react'
import Bar from './Bar';
import TeamCard from './TeamCard';

export const TeamMembers = () => {
  const members = [
    {
      id: 1,
      name: 'Gabriel Pognante',
      position: 'Especialista en Compliance',
      // image: icon1
      curriculum: [
        "Abogado (U.C.C)",
        "Especialista en Derecho Penal Económico (U.B.P)",
        "Diplomado en Crimen Organizado, Corrupción y Terrorismo (Univ. De Salamanca, España)",
        "Programa en Compliance y Prevención de la Corrupción Corporativa (Univ. S21)",
        "Certificación Internacional en Ética y Compliance (AAEC)"
      ],
      linkedin: "https://www.linkedin.com/in/gabriel-pognante-329910165/"
    },
    {
      id: 2,
      name: 'Federico Alfaro',
      position: 'Derecho Empresarial',
      // icon: icon2
      curriculum: [
        "Abogado (U.B.A)",
        "Maestrando en Derecho Empresario",
        "MBA en Gestión y Dirección de Organizaciones (U.B.P)",
        "Diplomado en Métodos Alternativos de Resolución de Conflictos",
        "Con más de 10 años de trayectoria como abogado independiente en el área civil, comercial y empresarial."
      ],
      linkedin: "https://www.linkedin.com/in/federico-alfaro-seghieri-52a5701a9/"
    },
    {
      id: 3,
      name: 'Maria Elisa Jaramillo',
      position: 'Propiedad Intelectual y Datos Personales',
      // icon: icon3
      curriculum: [
        "Abogada (UHE)",
        "Maestrando en Derecho de Propiedad Intelectual y Nuevas Tecnologías",
        "Diplomada en Propiedad Intelectual y en Derechos Humanos",
        "Más de 4 años de trayectoria como abogada en Ecuador en las áreas corporativa e inmobiliario",
        "2 años como abogada en Argentina en las áreas civil y empresarial",
        "Certificada con nivel B2 de inglés (Cambridge)"
      ],
      linkedin: "https://www.linkedin.com/in/maria-elisa-jaramillo-salazar-73524b264/"
    }
  ]
  return (
    <>
      <section id='team' className="team-container">
        <div className='areas-text-container team'>
          <h4 className='title areas'>QUIENES SOMOS ?</h4>
          <h1 className='subtitle blue areas'>NUESTRO EQUIPO</h1>
          <Bar />
        </div>
        <div className="team-content">
          {members.map((card, index) =>
            <TeamCard key={card.id} card={card} />
          )}
        </div>
      </section>
    </>
  );
};
