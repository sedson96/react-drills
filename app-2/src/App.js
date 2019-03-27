import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: ["Spongebob","Dragon","Suspended","Chocolate","Derek","Xylophone", "Badminton", "The color purple"]
    }
  }
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.list.map((item) => {
            return <h2>{item}</h2>
          })}
        </ul>

      </div>
    );
  }
}

export default App;
