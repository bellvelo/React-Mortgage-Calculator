import React from 'react';
import './components.css'

const Calculator = ({maxHouseValue}) => {
  return(
    <div className="calculator-figure">
    <h2> Your Maximum House Value is: £{maxHouseValue}</h2>
    <h4>then...</h4>
    <h4>Please input your term and interest rate to calculate your monthly payments</h4>
    </div>
  )
}

export default Calculator
