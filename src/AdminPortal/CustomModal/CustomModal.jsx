import React from 'react';
// import { FaTimes } from 'react-icons/fa';
import styles from './CustomModal.module.css';

const CustomModal = ({ isVisible, onClose, title, children }) => {
  if (!isVisible) return null; // Render nothing if modal is not visible

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>{title}</h2>
          {/* <FaTimes className={styles.closeIcon} onClick={onClose} />  */}
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default CustomModal;
