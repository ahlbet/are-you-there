import React from 'react';
import shifty from '../assets/ayt.gif';

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modal__content">
        {props.modalContent}
        <img src={shifty} alt='Shifty' />
      </div>
    </div>
  );
};

export default Modal;