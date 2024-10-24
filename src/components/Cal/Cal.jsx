import React, { useState, useEffect } from 'react'
import './Cal.css'

function Cal() {
  const [input, setInput] = useState('0')

  const calculateResult = (input) => {
    try {
      const sanitizedInput = input.replace(/,/g, '') // Remove commas before calculating
      const result = new Function('return ' + sanitizedInput)()
      return formatNumberWithCommas(result) // Format the result with commas
    } catch (error) {
      return 'Error'
    }
  }

  const formatNumberWithCommas = (number) => {
    // Handle large numbers and decimal values
    if (typeof number === 'number' || !isNaN(number)) {
      const parts = number.toString().split('.')
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      return parts.join('.')
    }
    return number
  }

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('0')
    } else if (value === '=') {
      setInput(calculateResult(input))
    } else if (value === '+/-') {
      const match = input.match(/-?\d+(\.\d+)?$/)
      if (match) {
        const number = match[0]
        const newInput = input.slice(0, -number.length) + (-parseFloat(number)).toString()
        setInput(formatNumberWithCommas(newInput))
      }
    } else {
      let newInput = input.replace(/,/g, ''); // Remove commas for processing
      if (newInput === '0' && value !== '.') {
        newInput = value;
      } else {
        const lastChar = newInput[newInput.length - 1];
        const operators = ['+', '-', '*', '/'];

        if (operators.includes(lastChar) && operators.includes(value)) {
          newInput = newInput.slice(0, -1) + value; // Replace the last operator
        } else {
          newInput += value; // Append value
        }
      }
      setInput(formatNumberWithCommas(newInput)); // Set the formatted input with commas
    }
    if (input === '') {
      setInput('0')
    }
  }

  const handleKeyPress = (event) => {
    const key = event.key
    const operators = ['+', '-', '*', '/', '.', 'C']

    if (key >= '0' && key <= '9') {
      handleButtonClick(key)
    } else if (key === '=') {
      handleButtonClick('+')
    } else if (operators.includes(key)) {
      handleButtonClick(key)
    } else if (key === 'Enter') {
      handleButtonClick('=')
    } else if (key === 'Backspace') {
      setInput((prev) => {
        const newInput = prev.slice(0, -1).replace(/,/g, ''); // Remove commas before processing
        return newInput === '' ? '0' : formatNumberWithCommas(newInput);
      });
    } else if (key === 'Escape') {
      handleButtonClick('C')
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [input])

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
            <td className='cal-color'>
              %
            </td>
            <td className='cal-color' onClick={() => handleButtonClick('/')}>
              &divide;
            </td>
          </tr>
          <tr>
            <td className='num-color' onClick={() => handleButtonClick('7')}>
              7
            </td>
            <td className='num-color' onClick={() => handleButtonClick('8')}>
              8
            </td>
            <td className='num-color' onClick={() => handleButtonClick('9')}>
              9
            </td>
            <td className='cal-color' onClick={() => handleButtonClick('*')}>
              &times;
            </td>
          </tr>
          <tr>
            <td className='num-color' onClick={() => handleButtonClick('4')}>
              4
            </td>
            <td className='num-color' onClick={() => handleButtonClick('5')}>
              5
            </td>
            <td className='num-color' onClick={() => handleButtonClick('6')}>
              6
            </td>
            <td className='cal-color' onClick={() => handleButtonClick('-')}>
              &minus;
            </td>
          </tr>
          <tr>
            <td className='num-color' onClick={() => handleButtonClick('1')}>
              1
            </td>
            <td className='num-color' onClick={() => handleButtonClick('2')}>
              2
            </td>
            <td className='num-color' onClick={() => handleButtonClick('3')}>
              3
            </td>
            <td className='cal-color' onClick={() => handleButtonClick('+')}>
              +
            </td>
          </tr>
          <tr>
            <td
              className='num-color'
              colSpan='2'
              onClick={() => handleButtonClick('0')}
            >
              0
            </td>
            <td className='num-color' onClick={() => handleButtonClick('.')}>
              .
            </td>
            <td className='cal-color' onClick={() => handleButtonClick('=')}>
              =
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Cal