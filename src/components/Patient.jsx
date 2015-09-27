import React from 'react';
import IndexLink from 'react-router';

class Patient extends React.Component {
  render() {
    let id = 'tbc';
    return(
      <div>
      --Back--
      Patient { id }
      </div>
    );
  }
};
      // <IndexLink to="/abc">Back</IndexLink>

export default Patient;