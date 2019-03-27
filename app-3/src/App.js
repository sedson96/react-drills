import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: ["spongebob","dragon","suspended","chocolate","derek","xylophone", "badminton", "the color purple"],
      userInput: "",
      filteredList: ["spongebob","dragon","suspended","chocolate","derek","xylophone", "badminton", "the color purple"]
    }
  }


  filter(val) {
    let filter = []
    for(let i = 0; i < this.state.list.length;i++){
      if (this.state.list[i].includes(val)){
        filter.push(this.state.list[i])
      }
    }
    this.setState({filteredList: filter})
  }


  render() {
    return (
      <div className="App">
      <div className="App">
        <input onChange={(event) => this.filter(event.target.value)}/>
        <h2>{this.state.userInput}</h2>
      </div>
        <ul>
          {this.state.filteredList.map((item) => {
            return <h2>{item}</h2>
          })}
        </ul>

      </div>
    );
  }

}
export default App;
