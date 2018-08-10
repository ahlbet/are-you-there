import React from 'react';
import Card from './Card';
import data from '../assets/data';

const Cards = () => {
  const constructedCards = data.map((card, index) => {
    return (<li key={index}>
      <Card header={card.header} content={card.content} />
    </li>);
  });

  return (
    <ul className="cards">
      {constructedCards}
    </ul>
  );
};

export default Cards;