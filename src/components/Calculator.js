import React from 'react';
import './components.css'

const Calculator = ({maxHouseValue}) => {
  return(
    <div className="calculator-figure">
    <h1> Your Maximum House Value is: £{maxHouseValue}</h1>
    </div>
  )
}

export default Calculator
