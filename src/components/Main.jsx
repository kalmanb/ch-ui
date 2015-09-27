import React from 'react';
import { Link } from 'react-router';

import HeaderTest from './Header.jsx';

class Main extends React.Component {
  render() {
    return (
      <div>
        <div className='container'>
          <HeaderTest />
          {this.props.children}
        </div>
      </div>
    )
  }
};

export default Main;
