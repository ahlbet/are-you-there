import React from 'react';
import Button from './Button';

const View2 = (props) => {
  return (
    <div className="view2">
      <Button handleClick={props.resetView1} label={'Try Again!'} />
    </div>
  );
};

export default View2;