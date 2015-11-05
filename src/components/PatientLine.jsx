import React from 'react';
import { Link } from 'react-router';

export default class PatientLine extends React.Component {
  render() {
    let { id, patient } = this.props
    return(
      <tr>
        <td>{ patient.firstName } { patient.lastName }</td>
        <td>{ patient.mobile }</td>
        <td>
          <Link to={`/patient/${id}`}>Details</Link>
        </td>
      </tr>
    );
  }
};
