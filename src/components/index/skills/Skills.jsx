import React, { useMemo, useState } from 'react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import Skill from 'components/index/skills/Skill';
import { skillArr } from 'components/index/skills/SkillArr';

import './skills.scss';
import Modal from 'components/index/skills/modal/Modal';
import Sorting from 'components/index/skills/sorting/Sorting';
import { FILTER } from 'consts';
import getFilteredSkills from 'components/index/skills/helpers/getFilteredSkills';

const getSortedList = (list, isReversed = false) => {
  const newList = [...list].sort((a, b) => {
    return b.proficiency.val - a.proficiency.val;
  });
  if (isReversed) {
    newList.reverse();
  }
  return newList;
};

function Skills(props) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isReversed, setIsReversed] = useState(false);

  const [filter, setFilter] = useState(FILTER.all);
  const [prof, setProf] = useState(1);

  const onSelect = (i) => {
    if (i === selectedIndex) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(i);
    }
  };

  const onReverse = () => setIsReversed((v) => !v);

  const sortedSkills = useMemo(() => {
    const sorted = getSortedList(skillArr, isReversed);
    const filtered = getFilteredSkills(sorted, filter, prof);
    return filtered;
  }, [prof, filter, isReversed]);

  const selectedItem = sortedSkills[selectedIndex];

  return (
    <AnimateSharedLayout type='crossfade'>
      <section className={'container'}>
        <header className={'section-header'}>
          <h1>I work with</h1>
          {/*<button onClick={onReverse}>Reverse this list</button>*/}

          <Sorting
            filter={filter}
            setFilter={setFilter}
            prof={prof}
            setProf={setProf}
          />
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
