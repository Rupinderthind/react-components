import React, { Component } from 'react';
import './App.css';

class IncDec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.increament = this.increament.bind(this);
    this.decreament = this.decreament.bind(this);
  }

  increament(){
    this.setState({value: (this.state.value+1)});
  }
  decreament(){
    this.setState({value: (this.state.value-1)});
  }

  render(){
  	return(
  		<div>
  			
  			<h3>
  				<button onClick={this.decreament}>Decrease</button>
  				{this.state.value}
  				<button onClick={this.increament}>Increase</button>
  			</h3>  			
  		</div>
  	);
  }

}

export default IncDec;