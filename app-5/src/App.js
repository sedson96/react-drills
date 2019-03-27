import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./components/Image"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image image = "https://i.kym-cdn.com/entries/icons/original/000/028/682/Dt2WrakU0AA1ScI.jpg" />
      </div>
    );
  }
}

export default App;
