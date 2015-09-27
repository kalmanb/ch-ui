import React from 'react';
import Link from 'react-router';

var patientLine = React.createClass({
  render() {
    return(
      <tr>
      <td>{ this.props.patient.firstName } { this.props.patient.lastName }</td>
      <td>{ this.props.patient.mobile }</td>
      </tr>
    );
  }
});
      // <td><Link to="/patient" params={{ id: this.props.patient.id }}>Details</Link></td>
      // {this.props.children}

export default patientLine;