import React from 'react';
import Card from './Card';

export default function CardList({ cards = [] }) {
  return (
    <div className='card-list'>
      {cards.map((card, i) => (
        <Card key={i} {...card} />
      ))}
    </div>
  );
}
