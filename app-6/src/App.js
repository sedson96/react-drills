import React, { Component } from "react";
import "./App.css";
import ToDo from "./components/ToDo"


class App extends Component {
  constructor() {
    super();
    this.state = {
      toDo: [],
      userInput: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.add = this.add.bind(this)
  }
  handleChange(val) {
    this.setState({userInput: val})
  }
  add() {
    this.setState({toDo: [...this.state.toDo, this.state.userInput]})
    console.log(this.state.toDo)
  }
  render() {
    let toDo = this.state.toDo.map((item) =>{
      return <ToDo item={item} />
  })             
  
    return (
      <div>
        <h1>My to-do List</h1>
        <input onChange={(event) => this.handleChange(event.target.value)} />
        <button onClick={() => this.add()}>Add</button>
        {toDo}
      </div>
    )
  }
}

export default App;
