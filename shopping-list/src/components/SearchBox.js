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

/**
 * // NECESSARY IMPORTS
 * import React from 'react';
 *
 * const SearchBox = () => {
 * // LOGIC
 *  const doSomething = () => {
 *    return "Something";
 *  }
 *
 * // RETURN - Component as HTML
 *  return (
 *   <div>{doSomething()}</div>
 *  );
 * }
 *
 * // EXPORT THE COMPONENT - so other files can use it
 * export default SearchBox;
 */
