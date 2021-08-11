import React from 'react';
import { Head } from 'react-static';
import TitleCard from 'components/index/TitleCard';
import Skills from 'components/index/skills/Skills';

const Index = () => (
  <>
    <Head>
      <meta name='theme-color' content='#000000' />
      <meta
        name='description'
        content='Website describing Krzysztof Widacki and his/my projects'
      />
      <meta
        name='keywords'
        content='Krzysztof, Widacki, React, Frontend, Developer, Programmer, Javascript, Typescript'
      />
      <meta name='author' content='Krzysztof Widacki' />
      <title>Krzysztof Widacki</title>
    </Head>
    <TitleCard />
    <Skills />
    <div className='my-projects'>TODO: List of Projects I made</div>
  </>
);

export default Index;
