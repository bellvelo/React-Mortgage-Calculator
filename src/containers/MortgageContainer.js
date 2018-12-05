import React from 'react';
import Header from '../components/Header';
import MortgageForm from '../components/MortgageForm';
import RateTermForm from '../components/RateTermForm';
import Calculator from '../components/Calculator';
import Repayments from '../components/Repayments';

import '../components/components.css'

class MortgageContainer extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      maxHouseValue: 0,
      monthlyPayments: 0
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleFormSubmit({salaryOne, salaryTwo, deposit, expenditure}){
    const salary = salaryOne + salaryTwo;
    const houseValue = (salary - expenditure + deposit)*3
    this.setState({maxHouseValue: houseValue})
  }

  handleSubmit({term, rate}){
    const payments = (this.state.maxHouseValue*rate/100)/term;
    this.setState({monthlyPayments: payments})
  }

  render(){
    return(
      <div className="mortgage-wrapper">
      <Header />
      <MortgageForm onFormSubmit={this.handleFormSubmit}/>
      <Calculator maxHouseValue={this.state.maxHouseValue} />
      <RateTermForm onSubmit={this.handleSubmit} maxHouseValue={this.state.maxHouseValue} />
      <Repayments monthlyPayments={this.state.monthlyPayments} />
      </div>
    )
  }
}


export default MortgageContainer
