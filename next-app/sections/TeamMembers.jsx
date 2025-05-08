import React from 'react'
import Bar from './Bar';
import TeamCard from './TeamCard';

export const TeamMembers = () => {
  const members = [
    {
      id: 1,
      name: 'Gabriel Pognante',
      position: 'DIRECTOR',
      curriculum: [
        "Abogado (UCC)",
        "Especialista en Derecho Penal Económico (U.B.P)",
        "Doctorando en Derecho Penal y Ciencias Penales (Univ. Del Salvador)",
        "Diplomado en Crimen Organizado, Corrupción y Terrorismo (Univ. De Salamanca, España)",
        "Programa en Compliance y Prevención de la Corrupción Corporativa (Univ. S21)",
        "Certificación Internacional en Ética y Compliance (IFCA-AAEC)",
        "Miembro Asociado del Asociación Argentina de Compliance (AAEC)",
        "Director Sala de Compliance del Colegio de Abogados de Córdoba"
      ],
      linkedin: "https://www.linkedin.com/in/gabriel-pognante-329910165/"
    },
    /*{
      id: 2,
      name: 'Juan Manuel Aráoz',
      position: 'ASOCIADO',
      curriculum: [
        "Abogado (UCC)",
        "Especialización en Derecho Penal (Univ. de Salamanca)",
        "Especialización en Inteligencia Artificial y Derecho (Univ. de Salamanca)",
        "Posgrado en Derecho de Alta Tecnología (UCA)",
        "Especialización en Derecho Ambiental (UCC)",
        "Experto en Prevención de la Corrupción"
      ],
      linkedin: "https://www.linkedin.com/in/juan-manuel-araoz-2467a44a/" 
    },*/
    {
      id: 3,
      name: 'Agustín Pascualini',
      position: 'ASOCIADO',
      curriculum: [
        "Abogado (U.C.C)",
        "Maestría en Derecho Empresario (Univ. Siglo XXI)",
        "Diplomatura en Derecho del Trabajo y Relaciones Laborales (Univ. Austral)",
        "Experto en Derecho Laboral de Empresas"
      ],
      linkedin: "https://www.linkedin.com/in/agust%C3%ADn-pascualini-244483114/" 
    },
    {
      id: 4,
      name: 'Edgardo Ruibal',
      position: 'ASOCIADO',
      curriculum: [
        "Abogado (U.N.C)",
        "Maestría en Derecho Empresario (Univ. Siglo XXI)",
        "Especialidad en Derecho Penal Económico y Tributario (Univ. Siglo XXI)",
        "Experto en Derecho Bancario y Financiero"
      ],
      linkedin: "https://www.linkedin.com/in/edgardo-ruibal-03b3a6242/" 
    },
    {
      id: 5,
      name: 'Federico Alfaro',
      position: 'ASOCIADO',
      curriculum: [
        "Abogado Notario (U.C.C)",
        "Maestrando en Derecho Empresario (UBP)",
        "Diplomado en procesos ejecutivos, civiles, comerciales y en defensa del consumidor."
      ],
      linkedin: "https://www.linkedin.com/in/federico-alfaro-seghieri-52a5701a9/"
    },
    {
      id: 6,
      name: 'Constanza Zucchella',
      position: 'ASOCIADA',
      curriculum: [
        "Abogado (U.C.C)",
        "Master en Derecho Empresario (Univ. Austral)",
        "Diplomada en Fideicomisos (U.C.C)",
        "Diplomatura en Desarrollo de Ecosistemas Emprendedores (U.C.C)",
        "Derecho de los negocios internacionales (Univ. Complutense de Madrid)",
        "Experta en Derecho Comercial y Empresarial"
      ],
      linkedin: "https://www.linkedin.com/in/constanza-zucchella-2979b08/" 
    },
    {
      id: 7,
      name: 'Concepción Bonetto',
      position: 'ASOCIADA',
      curriculum: [
        "Abogada (U.N.C)",
        "Notaria (Univ. Siglo XXI)",
        "Diplomada en Derecho Penal Económico y Tributario (UCASAL)"
      ],
      linkedin: "https://www.linkedin.com/in/concepcion-bonetto-4864471ba/" 
    },
    {
      id: 8,
      name: 'Leonardo Javier Mazzei',
      position: 'ASOCIADO',
      curriculum: [
        "Abogado (UBA)",
        "MBA – Administración y Gestión de las Organizaciones (UBP)",
        "Maestría en Derecho Empresario (UBP)",
        "Diplomatura en Medios Alternativos de Resolución de Conflictos (UBP)",
        "Programa Universitario en Finanzas (UADE)",
        "Programa en Gestión del Cliente Pyme (UBP)"
      ],
      linkedin: "https://www.linkedin.com/in/leonardo-mazzei-6ba06814a/" 
    },
    /*
    {
      id: 9,
      name: 'Florencia Escribano',
      position: 'ASOCIADA',
      curriculum: [
        "Abogada (UNC)",
        "Maestría en Derecho y Argumentación (UNC)",
        "Diplomatura en Derecho de los Negocios Inmobiliarios (UNC)",
        "Diplomatura en Derecho de Daños y Responsabilidad Civil (UNC)"
      ],
      linkedin: "https://www.linkedin.com/in/florencia-escribano-55465aa7/" 
    },
    */
    {
      id: 10,
      name: 'Florencia Luz Márquez Bonino',
      position: 'ASOCIADA',
      curriculum: [
        "Abogada (UBP)",
        "Doctorando en Ciencias Jurídicas (UMSA)",
        "Especialización en Derecho Penal Económico (UBP)",
        "Maestría en Criminología y Ciencias Forenses (UES21)",
        "LLM Candidate Maestría en Derecho con Orientación en Arbitraje Comercial y de Inversión, y en Contratos y Litigios (Univ. Austral)",
        "Diplomatura en Governance, Compliance, Control & Assurance (Univ. San Andrés)",
        "Programa de Prevención de Crímenes Financieros (IAE)",
        "Certificación Internacional en Compliance International Federation of Compliance Associations (IFCA)"
      ],
      linkedin: "https://www.linkedin.com/in/florenciamarquezbonino/" 
    }
  ];
  
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
