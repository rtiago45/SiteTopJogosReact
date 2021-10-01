import React, { Component } from "react";

class Clock extends React.Component {
  constructor(props) {
    super();
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>It's {this.state.date.toLocaleTimeString()}</h1>
        <button onClick={this.componentWillUnmount.bind(this)}>PAUSAR</button>
        <button onClick={this.componentDidMount.bind(this)}>CONTINUAR</button>
      </div>
    );
  }
}

export default Clock;
