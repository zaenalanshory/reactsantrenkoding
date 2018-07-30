import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Counter nama="Liverpool" />
        <Counter nama="Barca" />
        <Counter nama="MU" />
      </div>
    );
  }
}
export default App;

class Counter extends Component {
  state = {
    number: 0
  };
  turun = () => {
    console.log('Turun Turun');
    this.setState({
      number: this.state.number - 1
    });
  };
  naik = () => {
    console.log('naik naik ');
    this.setState({
      number: this.state.number + 1
    });
  };
  render() {
    return (
      <div>
        <h1>Rangking {this.props.nama}</h1>
        <h2>{this.state.number}</h2>
        <button onClick={this.naik}>naik</button>
        <button onClick={this.turun}>turun</button>
      </div>
    );
  }
}
