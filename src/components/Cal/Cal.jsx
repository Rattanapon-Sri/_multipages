import React, { useState, useEffect } from "react";
import "./Cal.css";

function Cal() {
  // เริ่มต้นหน้าจอ
  const [screenDisplay, setScreenDisplay] = useState("0");
  const [firstOperand, setFirstOperand] = useState(null);
  const [secondOperand, setSecondOperand] = useState(null);
  const [currentOperator, setCurrentOperator] = useState(null);
  const [lastOperator, setLastOperator] = useState(null);
  const [lastSecondOperand, setLastSecondOperand] = useState(null);
  const [result, setResult] = useState(null);
  const [resetDisplay, setResetDisplay] = useState(false);
  const [acPressed, setAcPressed] = useState(false);

  useEffect(() => {
    updateDisplay();
  }, [screenDisplay]);

  // อัพเดตหน้าจอ
  function updateDisplay() {
    if (screenDisplay !== "Error") {
      document.getElementById("display").value =
        parseFloat(screenDisplay).toLocaleString("en");
    } else {
      document.getElementById("display").value = screenDisplay;
    }
  }

  // ฟังก์ชันสำหรับกรอกตัวเลข
  function inputNumber(number) {
    if (screenDisplay.length >= 9 && !resetDisplay) {
      return;
    }

    if (resetDisplay) {
      setScreenDisplay(number.toString());
      setResetDisplay(false);
    } else {
      setScreenDisplay((prevDisplay) =>
        prevDisplay === "0"
          ? number.toString()
          : prevDisplay + number.toString()
      );
    }

    if (currentOperator === null) {
      console.log(
        `'${screenDisplay}' --> "first": first : '${screenDisplay}' , second : '0' , operator : '?' --> ${screenDisplay}`
      );
    } else {
      console.log(
        `'${screenDisplay}' --> "second": first : '${firstOperand}' , second : '${screenDisplay}' , operator : '${currentOperator}' --> `
      );
    }
    setAcPressed(false);
  }

  // ฟังก์ชันสำหรับกรอกจุดทศนิยม
  function inputDecimal() {
    if (resetDisplay) {
      setScreenDisplay("0.");
      setResetDisplay(false);
    } else if (!screenDisplay.includes(".")) {
      setScreenDisplay((prevDisplay) => prevDisplay + ".");
    }
    setAcPressed(false);
  }

  // ฟังก์ชันสำหรับกรอกเครื่องหมาย
  function inputOperator(operator) {
    if (currentOperator !== null && resetDisplay) {
      setCurrentOperator(operator);
      setLastOperator(operator);
      return;
    }

    if (currentOperator !== null) {
      calculate();
    }

    setFirstOperand(parseFloat(screenDisplay.replace(/,/g, "")));
    setCurrentOperator(operator);
    setLastOperator(operator);
    setResetDisplay(true);
    setAcPressed(false);

    console.log(
      `'${currentOperator}' --> "operator": first : '${firstOperand}' , second : '${firstOperand}' , operator : '${currentOperator}' --> ${firstOperand}`
    );
  }

  // ฟังก์ชันเปลี่ยนสัญลักษณ์
  function inputSignChange() {
    setScreenDisplay((prevDisplay) =>
      (parseFloat(prevDisplay) * -1).toString()
    );
    setAcPressed(false);
  }

  // คำนวณค่าตาม operator ที่เลือก
  function calculate() {
    if (
      firstOperand === null &&
      secondOperand === null &&
      currentOperator === null
    ) {
      console.log(`" ": first : '0' , second : '0' , operator : '?' --> 0`);
      setScreenDisplay("0");
      return;
    }

    let secondOperandValue = secondOperand;

    if (currentOperator === null && lastOperator !== null) {
      setFirstOperand(result !== null ? result : 0);
      secondOperandValue = lastSecondOperand || 0;
      setCurrentOperator(lastOperator);
    } else {
      secondOperandValue = parseFloat(screenDisplay.replace(/,/g, ""));
      setLastSecondOperand(secondOperandValue);
    }

    let calcResult = 0;
    switch (currentOperator || lastOperator) {
      case "+":
        calcResult = firstOperand + secondOperandValue;
        break;
      case "-":
        calcResult = firstOperand - secondOperandValue;
        break;
      case "*":
        calcResult = firstOperand * secondOperandValue;
        break;
      case "/":
        if (secondOperandValue === 0) {
          setScreenDisplay("Error");
          setResult(null);
          return;
        } else {
          calcResult = firstOperand / secondOperandValue;
        }
        break;
    }

    setScreenDisplay(calcResult.toString());
    setFirstOperand(calcResult);
    setResetDisplay(true);
    setCurrentOperator(null);

    console.log(
      `"=": first : '${firstOperand}' , second : '${secondOperandValue}' , operator : '${currentOperator}' --> ${calcResult}`
    );
  }

  // ฟังก์ชันสำหรับล้างหน้าจอ
  function clearDisplay() {
    if (!acPressed) {
      setScreenDisplay("0");
      setResult(null);
      setAcPressed(true);
    } else {
      setScreenDisplay("0");
      setResult(null);
      setFirstOperand(null);
      setSecondOperand(null);
      setCurrentOperator(null);
      setLastSecondOperand(null);
      setLastOperator(null);
      setAcPressed(false);
    }
  }

  return (
    <div className='cal-container'>
      <input
        type='text'
        id='display'
        className='cal-display'
        readOnly
        value={screenDisplay}
      />
      <table className='cal-table'>
        <tbody>
          <tr>
            <td className='cal-color' id='ac-btn' onClick={clearDisplay}>
              C
            </td>
            <td className='cal-color' onClick={inputSignChange}>
              +/-
            </td>
            <td className='cal-color' onClick={() => console.log("Percent")}>
              %
            </td>
            <td className='cal-color' onClick={() => inputOperator("/")}>
              &divide;
            </td>
          </tr>
          <tr>
            <td className='num-color' onClick={() => inputNumber(7)}>
              7
            </td>
            <td className='num-color' onClick={() => inputNumber(8)}>
              8
            </td>
            <td className='num-color' onClick={() => inputNumber(9)}>
              9
            </td>
            <td className='cal-color' onClick={() => inputOperator("*")}>
              &times;
            </td>
          </tr>
          <tr>
            <td className='num-color' onClick={() => inputNumber(4)}>
              4
            </td>
            <td className='num-color' onClick={() => inputNumber(5)}>
              5
            </td>
            <td className='num-color' onClick={() => inputNumber(6)}>
              6
            </td>
            <td className='cal-color' onClick={() => inputOperator("-")}>
              &minus;
            </td>
          </tr>
          <tr>
            <td className='num-color' onClick={() => inputNumber(1)}>
              1
            </td>
            <td className='num-color' onClick={() => inputNumber(2)}>
              2
            </td>
            <td className='num-color' onClick={() => inputNumber(3)}>
              3
            </td>
            <td className='cal-color' onClick={() => inputOperator("+")}>
              +
            </td>
          </tr>
          <tr>
            <td
              className='num-color'
              colSpan='2'
              onClick={() => inputNumber(0)}
            >
              0
            </td>
            <td className='num-color' onClick={inputDecimal}>
              .
            </td>
            <td className='cal-color' onClick={calculate}>
              =
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Cal;
