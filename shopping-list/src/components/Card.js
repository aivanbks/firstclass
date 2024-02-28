import React from 'react';

export default function Card({ ...props }) {
  const { name, price, category } = props;

  return (
    <div className='card'>
      <h2>{name}</h2>
      <p>${price}</p>
      <p>{category}</p>
    </div>
  );
}
