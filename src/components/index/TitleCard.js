import React from 'react';
import 'components/index/titleCard.scss';

function TitleCard(props) {
  return (
    <section className='stack colorful'>
      <div className='container'>
        <header>
          <h1>Krzysztof Widacki</h1>
          <h4>Frontend developer with Ambitions</h4>
        </header>
      </div>
    </section>
  );
}

export default TitleCard;
