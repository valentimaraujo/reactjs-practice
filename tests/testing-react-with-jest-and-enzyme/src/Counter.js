import React, { Component } from 'react';

class Counter extends Component {

  state = {
    count: 0
  };

  makeIncrementer = amount => () =>
    this.setState(prevState => ({
        count: prevState.count + amount
      })
    );


  increment = this.makeIncrementer(1);

  decrement = this.makeIncrementer(-1);

  render() {
    return (
      <div className="App">
        <p id="title">Current count: {this.state.count}</p>
        <button className="increment" onClick={this.increment}>INCREMENT COUNT</button>
        <button className='decrement' onClick={this.decrement}>DECREMENT COUNT</button>
      </div>
    );
  }
}

export default Counter;
