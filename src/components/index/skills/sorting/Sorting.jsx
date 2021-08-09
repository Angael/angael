import React, { useState } from 'react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import './sorting.scss';
import { FILTER, PROFICIENCY } from 'consts';

const numToProficiency = {
  1: PROFICIENCY.beginner,
  2: PROFICIENCY.intermediate,
  3: PROFICIENCY.advanced,
  4: PROFICIENCY.proficent,
};

const _proficiencies = Object.values(numToProficiency);

const motionProps = {
  initial: { scaleX: 0, opacity: 0 },
  animate: { scaleX: 1, opacity: 1 },
  exit: { scaleX: 0, opacity: 0, transition: { duration: 0.15 } },
};

function Sorting({ filter, setFilter, prof, setProf }) {
  const proficiency = numToProficiency[prof];

  const onChange = (e) => {
    setFilter(e.target.value);
  };

  const onChangeProf = (e) => {
    setProf(e.target.value);
  };

  const proficiencies = _proficiencies.map((v, i) =>
    i + 1 >= prof ? (
      <motion.span
        {...motionProps}
        key={v.word}
        className={v.word}
        layoutId={v.word}
      >
        {v.word}
        {i !== _proficiencies.length - 1 && ','}
      </motion.span>
    ) : null
  );

  return (
    <nav className={'sorting-wrapper'}>
      <div className='filter'>
        Show
        <select onChange={onChange} value={filter}>
          {Object.keys(FILTER).map((key) => (
            <option key={key}>{FILTER[key]}</option>
          ))}
        </select>
      </div>
      <div className='proficiency'>
        <input
          value={prof}
          onChange={onChangeProf}
          type='range'
          id='proficiency-slider'
          name='proficiency-slider'
          min='1'
          max='4'
        />
        <label htmlFor='proficiency-slider'>
          <AnimateSharedLayout type='crossfade'>
            <motion.div className={'prof-list'}>
              <AnimatePresence>{proficiencies}</AnimatePresence>
            </motion.div>
          </AnimateSharedLayout>
        </label>
      </div>
    </nav>
  );
}

export default Sorting;
