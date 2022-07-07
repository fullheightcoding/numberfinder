import React from 'react';
import {nanoid} from "nanoid";
import Number from '../components/Number'

export default function Home() {
    const [numbers, setNumbers] = React.useState(allNewNumbers())
    const numberElements = numbers.map(number => <Number value={number} key={number.id}/>)
    const [result, setResult] = React.useState(0)
  
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
        //todo: display the list of numbers entered to the console
        //todo: do some calculations with them
        console.log(numbers)
    }

    return (
        <div className='numbers'>
            <h4>Play the Numbers game.</h4>
            <div>
                <h4>Numbers:</h4>
                {numberElements}
                <h4>Target:</h4>
                <input type="text"/>
                <h4>Result:</h4>
                <span>{result > 0 ? result : ""}</span>
                <button onClick={handleClick}>Solve</button>
            </div>
        </div>
    )
}