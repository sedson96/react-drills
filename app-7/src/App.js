import React, { Component } from "react";
import "./App.css";
import List from "./components/List"
import NewTask from "./components/NewTask"

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
    this.addListItem = this.addListItem.bind(this)
  }
  addListItem(item) {
    this.setState({ list: [...this.state.list, item] });
  }
  render() {
    return (
      <div className="App">
        <h1>Your To-Do List</h1>
        <NewTask item={this.addListItem}/>
        <ul>
          <List list={this.state.list} />
        </ul>

      </div>

    );
  }
}

export default App;
