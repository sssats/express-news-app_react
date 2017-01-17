import React from 'react';
import {browserHistory} from 'react-router'
import loginController from '../controllers/loginController';

class Login extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }
  login() {
    loginController.login(this.state.login, this.state.password).then(json => {
      if (json.success) {
        browserHistory.push('/');
      }
    });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <section id="Login">
        <form name="loginForm">
          <div>
            <label>
              Login:
              <input onChange={this.handleChange} type="text" name="login" placeholder="Enter your login"/>
            </label>
          </div>
          <div>
            <label>
              Password:
              <input onChange={this.handleChange} type="password" name="password" placeholder="Enter your password"/>
            </label>
          </div>
          <button type="button" className="loginButton" onClick={this.login}>Login</button>
        </form>
      </section>
    )
  }
}

export default Login;
