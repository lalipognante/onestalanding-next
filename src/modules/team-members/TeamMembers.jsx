import React from 'react'
import './TeamMembers.css'
import TeamCard from '../../components/team-card/TeamCard';
import TeamCard2 from '../../components/team-card-2/TeamCard2';
import Bar from '../../components/bar/Bar';

export const TeamMembers = () => {
  const members = [
    {
      id: 1,
      name: 'Gabriel Pognante',
      position: 'Especialista en Compliance',
      // image: icon1
    },
    {
      id: 2,
      name: 'Ray Marie',
      position: 'Developer',
      // icon: icon2
    },
    {
      id: 3,
      name: 'Austin Min',
      position: 'Designer',
      // icon: icon3
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
        <div class="team-content">
          {members.map((card, index) =>
            <TeamCard2 key={card.id} card={card} />
          )}
        </div>
      </section>
    </>
  );
};
