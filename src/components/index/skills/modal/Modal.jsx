import React from 'react';
import { motion } from 'framer-motion';

import './modal.scss';

function Modal(props) {
  const { isSelected, icon, name, longDesc, proficiency, onSelect, iconStyle } =
    props;

  const onClose = () => {
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
        >
          <motion.img
            layoutId={`skill-icon-${name}`}
            src={icon}
            className='icon'
            style={iconStyle || {}}
          />
          <motion.p layoutId={`skill-name-${name}`} className='name'>
            {name}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className={'skill-details'}
          >
            {longDesc.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </motion.div>
        </motion.article>
        <motion.article
          layoutId={`skill-proficiency-container-${name}`}
          className={'skill-proficiency-container'}
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
