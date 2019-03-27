import React ,{Component}from "react";

class ToDo extends Component {
    render() {
        return(
        <div>
            <h4 >{this.props.item}</h4>
        </div>
        )
    }
}
export default ToDo;