import React from 'react';
import { Link } from 'react-router';

export default class Patient extends React.Component {
  render() {
    let id = 'tbc';
    return(
      <div>
        <Link to="/">Back</Link>
        Patient { id }
      </div>
    );
  }
};
