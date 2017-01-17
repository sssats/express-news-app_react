import React from 'react';
import {Link, browserHistory} from 'react-router';
import loginController from '../controllers/loginController'

class Header extends React.Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }
  logout() {
    loginController.logout();
    browserHistory.push('/');
  }
  render() {
    let login = {};
    let user = loginController.getUser().user;
    if (user) {
      login = <span>Hi, {user} <button type="button" onClick={this.logout}>logout</button></span>
    } else {
      login = <Link to={`/login`}>Login</Link>
    }
    return (
      <header>
        <nav>
          <Link to={`/`}>Home</Link>
          {login}
        </nav>
      </header>
    )
  }
}

export default Header;
