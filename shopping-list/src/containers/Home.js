import React, { useEffect, useState } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import data from '../data/data.json';
import { Select } from 'antd';

function Home() {
  const [search, setSearch] = useState(''); // const [stateVariable, setStateFunction] = useState(initialValue);
  const [filteredValues, setFilteredValues] = useState([]);

  const onSearchChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const API = 'https://www.fruityvice.com/api/fruit/all';
  fetch(API);

  // Running every time the second parameter is updated
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // https://www.fruityvice.com/api/fruit/all --- WANT TO FETCH THIS

  // data = [1, 2, 3, 4]
  // newData = [1, 4, 9, 16]
  // 1 *1
  // 2 *2
  // 3 *3
  // 4 *4

  // data.map((item) => {
  //   return item * item;
  // });

  /**
   * [{}, {}, {}, {}, ...] JSON
   * [{}, {}, {}, {}, ...] JS
   *
   *
   * item = {}
   *
   */

  const categories = [];

  const cards = data.map((item) => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }

    return {
      name: item.name,
      price: item.price,
      category: item.category,
    };
  });

  const filteredCards = cards
    .filter((card) => {
      return card.name.toLowerCase().includes(search.toLowerCase());
    })
    .filter((card) => {
      return filteredValues.length === 0
        ? true
        : filteredValues.includes(card.category);
    });

  const handleChange = (selectedValues) => {
    setFilteredValues(selectedValues);
  };

  const options = categories.map((category) => {
    return {
      label: category,
      value: category,
    };
  });

  return (
    <div className='App'>
      <SearchBox search={search} onSearchChange={onSearchChange} />
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
      <CardList cards={filteredCards} />
    </div>
  );
}

export default Home;
