import React from 'react';
import './components.css'

const Repayments = ({monthlyPayments}) => {
  return(
    <div className="repayment-figure">
    <h2> Your Monthly Repayments would be: £{monthlyPayments}</h2>
    </div>
  )
}

export default Repayments
