import './App.css';
import FreeCodeCampLogo from '../src/images/FreeCodeCamp_logo.svg.png';
import Button from './components/Button';
import Screen from './components/Screen';
import Clearbtn from './components/Clearbtn';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  // Use a Hook to change our Screen.
  const [input, setInput] = useState('');
  const addInput = value => {
    setInput(input + value);
  };
  // Using 'evaluate' from mathjs to calculate.
  const calculate = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      // Button '=' returned 'undefined' so we created an alert for this.
      alert('Please, add values to calculate');
    }
  };
  return (
    <div className="App">
      <div className='freecodecapm-logo-container'>
        <img src={FreeCodeCampLogo} className='freecodecamp-logo' alt='FreeCodeCamp Logo' />
      </div>
      <div className='calculator-container'>
        {/* 'input' defined also in its component.
        Used along with our hook. */}
        <Screen input={input}/>
        <div className='row'>
          {/* 'manageClic' has as value a function 'addInput' to change useState and throw it in Screen input. */}
          <Button manageClic={addInput}>1</Button>
          <Button manageClic={addInput}>2</Button>
          <Button manageClic={addInput}>3</Button>
          <Button manageClic={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button manageClic={addInput}>4</Button>
          <Button manageClic={addInput}>5</Button>
          <Button manageClic={addInput}>6</Button>
          <Button manageClic={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button manageClic={addInput}>7</Button>
          <Button manageClic={addInput}>8</Button>
          <Button manageClic={addInput}>9</Button>
          <Button manageClic={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button manageClic={calculate}>=</Button>
          <Button manageClic={addInput}>0</Button>
          <Button manageClic={addInput}>.</Button>
          <Button manageClic={addInput}>/</Button>
        </div>
        <div className='row'>
          {/* Simple anonymus function to reset our Hook. */}
          <Clearbtn manageClear={() => setInput('')}>Clear</Clearbtn>
        </div>
      </div>
    </div>
  );
}

export default App;
