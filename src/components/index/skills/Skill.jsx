import React from 'react';

function Skill(props) {
  const { icon, name, desc, longDesc, proficiency } = props;

  return (
    <div className='skill'>
      <p>{icon}</p>
      <p>{name}</p>
      <p>{desc}</p>
      <p>{longDesc}</p>
      <p>Proficiency: {proficiency.word}</p>
    </div>
  );
}

export default Skill;
