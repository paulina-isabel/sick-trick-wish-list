import './App.css';
import React from 'react';
import Tricks from '../Tricks/Tricks';
import TrickCard from '../TrickCard/TrickCard';
import getData from '../.././apiCalls/apiCalls';
import { useEffect, useState } from 'react';


function App() {

  const [skateData, setSkateData] = useState([])

  useEffect(() => {
    getData()
      .then(data => 
        setSkateData(data)
        )
  }, [])

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Tricks skateData={skateData}/>
    </div>
  );
}

export default App; 
