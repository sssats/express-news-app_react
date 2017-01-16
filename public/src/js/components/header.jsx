import React from 'react';
import { Link } from 'react-router';


class Header extends React.Component {
  render() {
      return (
        <header>
          <nav>
            <Link to={`/`}>Home</Link>
            <Link to={`/login`}>Login</Link>
          </nav>
        </header>
      )
  }
}

export default Header;
