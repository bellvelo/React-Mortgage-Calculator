import React from 'react';
import Header from '../components/Header';
import MortgageForm from '../components/MortgageForm';
import Calculator from '../components/Calculator';
import '../components/components.css'

class MortgageContainer extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      maxHouseValue: 0
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit({salaryOne, salaryTwo, deposit, expenditure}){
    const salary = salaryOne + salaryTwo;
    const houseValue = (salary - expenditure + deposit)*3
    this.setState({maxHouseValue: houseValue})
  }

  render(){
    return(
      <div className="mortgage-wrapper">
      <Header />
      <MortgageForm onFormSubmit={this.handleFormSubmit}/>
      <Calculator maxHouseValue={this.state.maxHouseValue} />
      </div>
    )
  }
}


export default MortgageContainer
