import './App.css';
import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import CardList from './components/CardList';
import data from './data/data.json';

function App() {
  const [search, setSearch] = useState('');

  const onSearchChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const cards = data.map((item) => {
    return {
      name: item.name,
      price: item.price,
      category: item.category,
    };
  });

  const filteredCards = cards.filter((card) => {
    return card.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className='App'>
      <SearchBox search={search} onSearchChange={onSearchChange} />
      <CardList cards={filteredCards} />
    </div>
  );
}

export default App;
