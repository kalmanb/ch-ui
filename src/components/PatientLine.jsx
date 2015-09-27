import React from 'react';
import { Link } from 'react-router';

export default class PatientLine extends React.Component {
  render() {
    return(
      <tr>
      <td>{ this.props.patient.firstName } { this.props.patient.lastName }</td>
      <td>{ this.props.patient.mobile }</td>
      <td><Link to="/patient" params={{ id: this.props.patient.id }}>Details</Link></td>
      </tr>
    );
  }
};
