import React, { useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import Card from './components/Card';
import data from './data/data.json'
import CardList from './components/CardList';
import { Select } from 'antd';

function App() {
  const [search, setSearch] = useState('')
  const [filteredValues, setFilteredValues] = useState([]);

  const searchChange = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  }

  const categories = [];

  const cards = data.map((item) => {
    if (!categories.includes(item.category)){
      categories.push(item.category);
    }
    return {
      name: item.name,
      price: item.price,
      category: item.category,
    }
  }) 

  // console.log(cards[0])
  
  // const filteredCards = cards.filter(checkword);
  
  // function checkword(card){
  //   // return card.name === search
  //   return card.name.toLowerCase().includes(search.toLowerCase());
  // }

  const filteredCards = cards
  .filter((card) =>{
    return card.name.toLowerCase().includes(search.toLowerCase());
  })
  .filter((card) =>{
    return filteredValues.length ===0
    ? true
    : filteredValues.includes(card.category);
  });

  const handleChange = (selectedValues) => {
    setFilteredValues(selectedValues);
  };

  const options = categories.map((category) =>{
    return {
      label: category,
      value: category,
    };
  });

 return (
    <div className="App">
      <SearchBox search={search} searchChange={searchChange}/>
      {/* <Card {...cards[0]}/> */}
      <CardList cards={filteredCards}/>
      <Select
        mode='multiple'
        allowClear
        style={{
          width: '50%',
        }}
        placeholder='Please select'
        defaultValue={[]}
        onChange={handleChange}
        options={options}
      />
      
    </div>
  );
}

export default App;
