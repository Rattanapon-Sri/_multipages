import React, { useState, useEffect } from 'react';
import './Cal.css';

function Cal() {
  const [input, setInput] = useState('0');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('0');
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else {
      if (input === '0' && value !== '.') {
        setInput(value);
      } else {
        const lastChar = input[input.length - 1];
        const operators = ['+', '-', '*', '/'];

        if (operators.includes(lastChar) && operators.includes(value)) {
          return;
        } else {
          setInput((prev) => prev + value);
        }
      }
    }
  };

  const handleKeyPress = (event) => {
    const key = event.key;
    const operators = ['+', '-', '*', '/', '.', 'C'];

    if (key >= '0' && key <= '9') {
      handleButtonClick(key);
    } else if (key === '=' || key === '+') {
      handleButtonClick(key === '=' ? '+' : '+');
    } else if (operators.includes(key)) {
      handleButtonClick(key);
    } else if (key === 'Enter') {
      handleButtonClick('=');
    } else if (key === 'Backspace') {
      setInput((prev) => prev.slice(0, -1));
    } else if (key === 'Escape') {
      handleButtonClick('C');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [input]);

  return (
    <div className='cal-container'>
      <input
        type='text'
        id='display'
        className='cal-display'
        value={input}
        readOnly
      />
      <table className='cal-table'>
        <tbody>
          <tr>
            <td className='cal-color' onClick={() => handleButtonClick('C')}>
              C
            </td>
            <td className='cal-color' onClick={() => handleButtonClick('+/-')}>
              +/- 
            </td>
            <td className='cal-color' onClick={() => handleButtonClick('%')}>
              %
            </td>
            <td className='cal-color' onClick={() => handleButtonClick('/')}>
              &divide;
            </td>
          </tr>
          <tr>
            <td className='num-color' onClick={() => handleButtonClick('7')}>7</td>
            <td className='num-color' onClick={() => handleButtonClick('8')}>8</td>
            <td className='num-color' onClick={() => handleButtonClick('9')}>9</td>
            <td className='cal-color' onClick={() => handleButtonClick('*')}>
              &times;
            </td>
          </tr>
          <tr>
            <td className='num-color' onClick={() => handleButtonClick('4')}>4</td>
            <td className='num-color' onClick={() => handleButtonClick('5')}>5</td>
            <td className='num-color' onClick={() => handleButtonClick('6')}>6</td>
            <td className='cal-color' onClick={() => handleButtonClick('-')}>
              &minus;
            </td>
          </tr>
          <tr>
            <td className='num-color' onClick={() => handleButtonClick('1')}>1</td>
            <td className='num-color' onClick={() => handleButtonClick('2')}>2</td>
            <td className='num-color' onClick={() => handleButtonClick('3')}>3</td>
            <td className='cal-color' onClick={() => handleButtonClick('+')}>
              +
            </td>
          </tr>
          <tr>
            <td className='num-color' colSpan='2' onClick={() => handleButtonClick('0')}>0</td>
            <td className='num-color' onClick={() => handleButtonClick('.')}>.</td>
            <td className='cal-color' onClick={() => handleButtonClick('=')}>
              =
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Cal;