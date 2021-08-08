import React, { useMemo, useState } from 'react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import Skill from 'components/index/skills/Skill';
import { skillArr } from 'components/index/skills/SkillArr';

import './skills.scss';
import Modal from 'components/index/skills/modal/Modal';

function Skills(props) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isReversed, setIsReversed] = useState(false);
  //Tutaj uzyj animate shared layout bo tam jest taki super myk ze layout id podajesz i moga elementy plynnie przeplywac w inne miejsce i jest super

  const onSelect = (i) => {
    if (i === selectedIndex) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(i);
    }
  };

  const onReverse = () => setIsReversed((v) => !v);

  const sortedSkills = useMemo(() => {
    const newList = [...skillArr].sort((a, b) => {
      return b.proficiency.val - a.proficiency.val;
    });
    if (isReversed) {
      newList.reverse();
    }
    return newList;
  }, [isReversed]);

  const selectedItem = sortedSkills[selectedIndex];

  return (
    <AnimateSharedLayout type='crossfade'>
      <section className={'container'}>
        <header className={'section-header'}>
          <h1>I work with</h1>
          <button onClick={onReverse}>Reverse this list</button>
        </header>
        <motion.div className='skills'>
          {sortedSkills.map((skill, i) => {
            return (
              <Skill
                isSelected={i === selectedIndex}
                key={skill.name}
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
