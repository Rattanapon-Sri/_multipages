import React from 'react'
import './Calculator.css'
import Cal from '../../components/Cal/Cal'

function Calculator() {
  return (
    <div className='calulator-container'>
      <div>
        <Cal />
      </div>
      <div>
        <br />
        <p>ใส่เลขได้ตั้งแต่ 0-9</p>
        <p>ใส่เครื่องหมายได้ตั้งแต่ + - * /</p>
        <p>C คือClear All แต่ถ้าอยากลบที่ละตัวกด Backspace บนแป้นพิมพ์</p>
      </div>
    </div>
  )
}
export default Calculator
