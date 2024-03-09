import React from 'react'

export default function Card({ ...props }){
  const { name, price, category } = props;
  // console.log(name)

  return(
    <div className='card'>
      <h2>{name}</h2>
      <h2>${price}</h2>
      <h2>{category}</h2>
    </div>
  );
}