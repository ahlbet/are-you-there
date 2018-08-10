import React from 'react';
import Button from './Button';
import shifty from '../assets/ayt.gif';

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <Button handleClick={props.resetView1} label={'I\'m still here'} />
        <img src={shifty} alt='Shifty' />
      </div>
    </div>
  );
};

export default Modal;