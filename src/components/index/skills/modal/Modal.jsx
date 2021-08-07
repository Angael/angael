import React from 'react';
import { motion } from 'framer-motion';

import './modal.scss';

function Modal(props) {
  const { isSelected, icon, name, desc, longDesc, proficiency, onSelect } =
    props;

  const onClose = () => {
    console.log('close modal');
    onSelect();
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        className='overlay'
        onClick={onClose}
      />
      <div className='skill-container selected'>
        <motion.article
          layoutId={`skill-container-${name}`}
          className={'skill-content'}
          transition={{ duration: 2 }}
        >
          <motion.p
            layoutId={`skill-name-${name}`}
            transition={{ duration: 2 }}
            className='name'
          >
            {name}
          </motion.p>
          <motion.img
            layoutId={`skill-icon-${name}`}
            transition={{ duration: 2 }}
            src={icon}
            className='icon'
          />{' '}
          <motion.p>{desc}</motion.p>
          <motion.p>{longDesc}</motion.p>
          <motion.p>Proficiency: {proficiency.word}</motion.p>
        </motion.article>
      </div>
    </>
  );
}

export default Modal;
