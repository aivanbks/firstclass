import React, { useState } from 'react';
import './App.css';


function App() {
  const [search, setSearch] = useState('')
  const searchChange = (e) => {
    console.log(e.target.value);
    
  }
  return (
    <div className="App">
      <input onChange={searchChange}></input>
    </div>
  );
}

export default App;
