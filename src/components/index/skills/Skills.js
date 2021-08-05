import React from 'react';
import { AnimateSharedLayout, motion } from 'framer-motion';
import Skill from 'components/index/skills/Skill';

import './skills.scss';

const skillArr = [
  {
    icon: 'ikona',
    name: 'react',
    desc: 'My favourite tool for writing frontend',
    longDesc: [
      'I work with react since 2019, and in this time It has completely changed how I view frontend.',
      `Even this site is built with SSR react`,
    ],
    proficiency: {
      num: 100,
      word: 'Professional',
    },
  },
  {
    icon: 'ikona',
    name: 'Webpack',
    desc: 'My bundler of choice',
    longDesc: [
      'I work with react since 2019, and in this time It has completely changed how I view frontend.',
      `Even this site is built with SSR react`,
    ],
    proficiency: {
      num: 50,
      word: 'I mean it is webpack',
    },
  },
  {
    icon: 'ikona',
    name: 'AWS',
    desc: 'Stuff i know about it',
    longDesc: [
      'I work with react since 2019, and in this time It has completely changed how I view frontend.',
      `Even this site is built with SSR react`,
    ],
    proficiency: {
      num: 100,
      word: 'Professional',
    },
  },
];

function Skills(props) {
  //Tutaj uzyj animate shared layout bo tam jest taki super myk ze layout id podajesz i moga elementy plynnie przeplywac w inne miejsce i jest super
  return (
    <div className='skills container'>
      {skillArr.map((skill) => {
        return <Skill key={skill} {...skill} />;
      })}
    </div>
  );
}

export default Skills;
