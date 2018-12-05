import React from 'react';
import './components.css'

class RateTermForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      term: 0,
      rate: 0
    }

    this.handleTermChange = this.handleTermChange.bind(this)
    this.handleRateChange = this.handleRateChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTermChange(event){
    this.setState({term: event.target.value});
  }
  handleRateChange(event){
    this.setState({rate: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault(); // prevents the form being cleared
    const term = parseInt(this.state.term);
    const rate = parseInt(this.state.rate);

    if(!term || !rate) return;
    this.props.onSubmit({term: term, rate: rate})
    this.setState({term: "", rate: ""}); // this clears the form
  }

  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
      <div className="repayment">
      <label for="Term">Term:</label>
      <input type="number"
      placeholder="Term"
      value={this.state.term}
      onChange={this.handleTermChange} name="term" id="term"/>
      <label for="rate">Rate:</label>
      <input type="number"
      placeholder="Rate"
      value={this.state.rate}
      onChange={this.handleRateChange} name="rate" id="rate"/>
      </div>

      <div className="button-wrapper">
      <input className="button" type="submit" value="Repayments"/>
      </div>

      </form>
      </div>


    )
  }
}

 export default RateTermForm
