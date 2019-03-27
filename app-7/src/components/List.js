import React ,{Component}from "react";
import ToDo from "./ToDo"


class List extends Component {
    render() {
        let todo = this.props.list.map((item,index) => {
            return <ToDo item={item} key={index}/>
        })
        return(
        <div>
            {todo}
        </div>
        )
    }
}

export default List;