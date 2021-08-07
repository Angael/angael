import React, { forwardRef } from 'react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

function Skill(props, ref) {
  const { /*isSelected,*/ icon, name, desc, longDesc, proficiency, onSelect } =
    props;

  const isSelected = false;

  const backgroundColor = isSelected
    ? 'rgba(0, 0, 0, 0.05)'
    : 'rgba(0, 0, 0, 0)';

  return (
    <div>
      <div className='skill-container'>
        <motion.article
          className={`skill-content`}
          onClick={onSelect}
          ref={ref}
          layoutId={`skill-container-${name}`}
        >
          <motion.img
            layoutId={`skill-icon-${name}`}
            src={icon}
            className='icon'
          />{' '}
          <motion.p layoutId={`skill-name-${name}`} className='name'>
            {name}
          </motion.p>
          {/*{isSelected && (*/}
          {/*  <>*/}
          {/*    <motion.p>{desc}</motion.p>*/}
          {/*    <motion.p>{longDesc}</motion.p>*/}
          {/*    <motion.p>Proficiency: {proficiency.word}</motion.p>*/}
          {/*  </>*/}
          {/*)}*/}
        </motion.article>
      </div>
    </div>
  );
}

export default forwardRef(Skill);
