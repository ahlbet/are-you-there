import React from 'react';
import Modal from './Modal';
import Cards from './Cards';

const View1 = (props) => {
  return (
    <div>
      <div>
        <p className="challenge">YOUR MISSION, SHOULD YOU CHOOSE TO ACCEPT IT, IS TO READ EVERYTHING ON THE PAGE AND MEMORIZE IT</p>
        <Cards />
        {
          props.isShowingModal ?
            <Modal resetView1={props.resetView1} />
            :
            ''
        }
      </div>
    </div>
  );
};

export default View1;