import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this); // Binding the method
    this.name = "Guest";
  }

  handleClick() {
    alert("Button Clicked!");
    this.name = "John";
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <p>Hello, {this.name}!</p>
        <button onClick={this.handleClick}>Change Name</button>
      </div>
    );
  }
}
