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
        <motion.img
          // transition={{ duration: 2 }}
          layoutId={`skill-icon-${name}`}
          src={icon}
          className='icon'
        />
        <motion.article
          layoutId={`skill-container-${name}`}
          className={'skill-content'}
          // transition={{ duration: 2 }}
        >
          <motion.p
            layoutId={`skill-name-${name}`}
            // transition={{ duration: 2 }}
            className='name'
          >
            {name}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className={'skill-details'}
          >
            <p>{desc}</p>
            <p>{longDesc}</p>
            <h4>Proficiency:</h4>
            <p>{proficiency.word}</p>
          </motion.div>
        </motion.article>
      </div>
    </>
  );
}

export default Modal;
