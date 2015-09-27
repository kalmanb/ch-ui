import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <nav className='blue darken-2'>
        <div className='nav-wrapper container'>
          <Link to="/" className='brand-logo'>Connect Health</Link>
        </div>
      </nav>
    );
  }
};
