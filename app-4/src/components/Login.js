import React ,{ Component }from "react";

class Login extends Component {
    constructor() {
        super();
        this.state = {
          username: "",
          password: ""
        }
    
      }
    username(name) {
        this.setState({username: name})
        console.log(this.state.username)
    }
    password(password) {
        this.setState({password: password})
        console.log(this.state.password)
    }
    login() {
        alert(`Username: ${this.state.username}     Password: ${this.state.password}`)
    }
    render() {
        return (
        <div>
            <input onChange={(event) => this.username(event.target.value)}/>
            <input onChange={(event) => this.password(event.target.value)}/>
            <button onClick={(event) => this.login()}>Login</button>
        </div>
        )
    }
}

export default Login;