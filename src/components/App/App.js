import './App.css';
import React from 'react';
import Tricks from '../Tricks/Tricks';
import Form from '../Form/Form';
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

  function addTrick(newTrick) {
    setSkateData([...skateData, newTrick])
  }

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form addTrick={addTrick}/>
      <Tricks skateData={skateData}/>
    </div>
  );
}

export default App; 
