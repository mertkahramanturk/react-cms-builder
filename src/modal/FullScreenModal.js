import React from 'react';

const FullScreenModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="modal">
        {children}
      </div>
    </div>
  );
};

export default FullScreenModal;
