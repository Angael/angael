import React, { forwardRef } from 'react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

function Skill(props, ref) {
  const { isSelected, icon, name, longDesc, proficiency, onSelect, iconStyle } =
    props;

  // This fixes bug. where crossfade didnt dissapear logos
  const motionProps = !isSelected
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {};

  return (
    <button className={'skill-btn-container'} onClick={onSelect}>
      <div className='skill-container'>
        <motion.article
          {...motionProps}
          className={`skill-content`}
          ref={ref}
          layoutId={`skill-container-${name}`}
          role='button'
          tabindex='1'
        >
          <motion.div
            className='icon-container'
            // transition={{ duration: 2 }}
          >
            <motion.img
              layoutId={`skill-icon-${name}`}
              src={icon}
              className='icon'
              style={iconStyle || {}}
            />
          </motion.div>
          <motion.p layoutId={`skill-name-${name}`} className='name'>
            {name}
          </motion.p>
          <motion.div
            layoutId={`skill-proficiency-container-${name}`}
            className={`skill-proficiency-container`}
          >
            <motion.p
              layoutId={`skill-proficiency-${name}`}
              className={`skill-proficiency ${proficiency.word}`}
            >
              {proficiency.word}
            </motion.p>
          </motion.div>
          {/*{isSelected && (*/}
          {/*  <>*/}
          {/*    <motion.p>{desc}</motion.p>*/}
          {/*    <motion.p>{longDesc}</motion.p>*/}
          {/*    <motion.p>Proficiency: {proficiency.word}</motion.p>*/}
          {/*  </>*/}
          {/*)}*/}
        </motion.article>
      </div>
    </button>
  );
}

export default forwardRef(Skill);
