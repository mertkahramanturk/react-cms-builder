import React from 'react';
import styles from './FullScreenModal.module.css';

const FullScreenModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* <button onClick={onClose} className={styles.closeButton}>X</button> */}
        {children}
      </div>
    </div>
  );
};

export default FullScreenModal;
