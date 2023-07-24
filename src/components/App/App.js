import './App.css';
import React from 'react';
import TrickCard from '../TrickCard/TrickCard';
import getData from '../.././apiCalls/apiCalls';


function App() {
  getData()

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <TrickCard />
    </div>
  );
}

export default App; 
