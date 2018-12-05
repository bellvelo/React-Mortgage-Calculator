import React from 'react';
import './components.css'

class MortgageForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      salaryOne: 0,
      salaryTwo: 0,
      deposit: 0,
      expenditure: 0
    }

    this.handleSalaryOneChange = this.handleSalaryOneChange.bind(this)
    this.handleSalaryTwoChange = this.handleSalaryTwoChange.bind(this)
    this.handleDepositChange = this.handleDepositChange.bind(this)
    this.handleExpenditureChange = this.handleExpenditureChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSalaryOneChange(event){
    this.setState({salaryOne: event.target.value});
  }
  handleSalaryTwoChange(event){
    this.setState({salaryTwo: event.target.value});
  }
  handleDepositChange(event){
    this.setState({deposit: event.target.value});
  }
  handleExpenditureChange(event){
    this.setState({expenditure: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault(); // prevents the form being cleared
    const salaryOne = parseInt(this.state.salaryOne);
    const salaryTwo = parseInt(this.state.salaryTwo);
    const deposit = parseInt(this.state.deposit);
    const expenditure = parseInt(this.state.expenditure);

    if(!salaryOne || !salaryTwo) return <p>Please input Salary Information</p>;
    this.props.onFormSubmit({salaryOne: salaryOne, salaryTwo: salaryTwo, deposit: deposit, expenditure: expenditure})
    this.setState({salaryOne: "", salaryTwo: "", deposit: "", expenditure: ""}); // this clears the form
  }

  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
      <div className="input-form-one">
      <label for="salaryone">Salary One:</label>
      <input type="number"
      placeholder="Salary One"
      value={this.state.salaryOne}
      onChange={this.handleSalaryOneChange} name="salaryone" id="salaryone"/>
      <label for="salarytwo">Salary Two:</label>
      <input type="number"
      placeholder="Salary Two"
      value={this.state.salaryTwo}
      onChange={this.handleSalaryTwoChange} name="salarytwo" id="salarytwo"/>
      </div>

      <div className="input-form-two">
      <label for="deposit">Deposit:</label>
      <input type="number"
      placeholder="Deposit"
      value={this.state.deposit}
      onChange={this.handleDepositChange} name="deposit" id="deposit"/>
      <label for="expenditure">Expenditure:</label>
      <input type="number"
      placeholder="Expenditure"
      value={this.state.expenditure}
      onChange={this.handleExpenditureChange} name="expenditure" id="expenditure"/>
      </div>

      <div className="button-wrapper">
      <input className="button" type="submit" value="Calculate"/>
      </div>

      </form>
      </div>


    )
  }
}

export default MortgageForm
