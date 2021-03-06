import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__header">{props.header}</div>
      <div className="card__content">{props.content}</div>
    </div>
  );
};

export default Card;