import React ,{Component}from "react";

class NewTask extends Component {
    constructor(){
        super()
        this.state = {
            userInput: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.add = this.add.bind(this)
    }

    handleChange(val){
        this.setState({userInput: val})
    }
    add() {
        this.props.item(this.state.userInput)
        this.setState({userInput: ""})
    }
    render() {
        return(
        <div>
            <input onChange={(event) => this.handleChange(event.target.value)} value={this.state.userInput}/>
            <button onClick={() => this.add()}>Add</button>
        </div>
        )
    }
        
}
export default NewTask;