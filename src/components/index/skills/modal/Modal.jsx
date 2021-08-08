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
          // transition={{ duration: 2 }}
        >
          <motion.img
            // transition={{ duration: 2 }}
            layoutId={`skill-icon-${name}`}
            src={icon}
            className='icon'
          />
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
            {/*<p>{desc}</p>*/}
            {longDesc.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </motion.div>
        </motion.article>
        <motion.article
          layoutId={`skill-proficiency-container-${name}`}
          className={'skill-proficiency-container'}
          // transition={{ duration: 2 }}
        >
          <h4>I am</h4>
          <motion.p
            layoutId={`skill-proficiency-${name}`}
            className={`skill-proficiency ${proficiency.word}`}
          >
            {proficiency.word}
          </motion.p>
          <h4> using {name}</h4>
        </motion.article>
      </div>
    </>
  );
}

export default Modal;
