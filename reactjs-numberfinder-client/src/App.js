import React from 'react';
import { nanoid } from 'nanoid';
import Number from './components/Number';
import logo from './logo.svg';
import './App.css';

function App() {

  const [numbers, setNumbers] = React.useState(allNewNumbers())
  const numberElements = numbers.map(number => <Number value={number} key={number.id}/>)

  function allNewNumbers() {
    const newNumbers = [];
    for (let i = 0; i < 6; i++) {
      newNumbers.push(generateNewNumber())
    }
    return newNumbers
  }

  function generateNewNumber() {
    return {
      value: 0,
      id: nanoid()
    }
  }

  function handleClick() {
    console.log("solve problem")
  }

  return (
    <div className="App">
      <h1>Number finder</h1>
      <hr/>
      <h2>Numbers</h2>
      {numberElements}
      <h2>Target</h2>
      <input type="text"/>
      <button onClick={handleClick}>Solve</button>
    </div>
  );
}

export default App;