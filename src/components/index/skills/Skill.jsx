import React, { forwardRef } from 'react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

function Skill(props, ref) {
  const { isSelected, icon, name, desc, longDesc, proficiency, onSelect } =
    props;

  const backgroundColor = isSelected
    ? 'rgba(0, 0, 0, 0.05)'
    : 'rgba(0, 0, 0, 0)';

  return (
    <div>
      <motion.article
        layout
        className={`skill ${isSelected && 'selected'}`}
        onClick={onSelect}
        ref={ref}
        initial={{ borderRadius: '3rem' }}
        // transition={{ duration: 0.3 }}
        animate={{ backgroundColor }}
      >
        <motion.img layout src={icon} className='icon' />{' '}
        <motion.p layout className='name'>
          {name}
        </motion.p>
        {isSelected && (
          <>
            <motion.p>{desc}</motion.p>
            <motion.p>{longDesc}</motion.p>
            <motion.p>Proficiency: {proficiency.word}</motion.p>
          </>
        )}
      </motion.article>
    </div>
  );
}

const Overlay = ({ isSelected, onClick }) => (
  <motion.div
    initial={false}
    animate={{ opacity: isSelected ? 1 : 0 }}
    transition={{ duration: 0.2 }}
    style={{ pointerEvents: isSelected ? 'auto' : 'none' }}
    className='overlay'
    onClick={onClick}
  />
);

export default forwardRef(Skill);
