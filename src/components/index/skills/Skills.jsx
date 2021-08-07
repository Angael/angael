import React, { useState } from 'react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import Skill from 'components/index/skills/Skill';
import { skillArr } from 'components/index/skills/SkillArr';

import './skills.scss';
import Modal from 'components/index/skills/modal/Modal';

function Skills(props) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  //Tutaj uzyj animate shared layout bo tam jest taki super myk ze layout id podajesz i moga elementy plynnie przeplywac w inne miejsce i jest super

  const selectedItem = skillArr[selectedIndex];
  console.log(selectedIndex);

  const onSelect = (i) => {
    if (i === selectedIndex) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(i);
    }
  };

  return (
    <AnimateSharedLayout type='crossfadez'>
      <section className={'container'}>
        <header className={'section-header'}>
          <h1>I work with</h1>
        </header>
        <motion.div className='skills'>
          {skillArr.map((skill, i) => {
            return (
              <Skill
                isSelected={i === selectedIndex}
                key={skill}
                {...skill}
                index={i}
                onSelect={() => onSelect(i)}
              />
            );
          })}
        </motion.div>
        <AnimatePresence>
          {selectedItem && (
            <Modal {...selectedItem} onSelect={() => setSelectedIndex(null)} />
          )}
        </AnimatePresence>
      </section>
    </AnimateSharedLayout>
  );
}

export default Skills;
