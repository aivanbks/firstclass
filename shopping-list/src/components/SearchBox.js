import React from 'react';

export default function SearchBox({ search, onSearchChange }) {
  return (
    <div>
      <input
        className='search-box'
        type='text'
        value={search ? search : ''}
        placeholder='Search...'
        onChange={onSearchChange}
      />
    </div>
  );
}
