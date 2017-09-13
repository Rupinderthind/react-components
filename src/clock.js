import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      curTime: null,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    setInterval(function(){this.setState({curTime: new  Date().toLocaleString()});}.bind(this), 1000);
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>

        <h1>Date: {this.state.curTime}</h1>
      </div>
    );
  }
}
export default Clock;