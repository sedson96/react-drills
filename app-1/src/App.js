import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
  super()
  this.state = {
    userInput: ""
  }
  this.handleChange = this.handleChange.bind(this)
  }
  handleChange(val) {
    this.setState({userInput: val})
    console.log(this.state.userInput)
  }
  render() {
    return (
      <div className="App">
        <input onChange={(event) => this.handleChange(event.target.value)}/>
        <h2>{this.state.userInput}</h2>
      </div>
    );
  }
}

export default App;
