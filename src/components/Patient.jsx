import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';

import PatientStore from '../stores/PatientStore';
import PatientActions from '../actions/PatientActions';

import { Link } from 'react-router';

@connectToStores
export default class Patient extends Component {

  static getStores() {
    return [PatientStore];
  }
  static getPropsFromStores() {
    return PatientStore.getState();
  }

  render() {
    let { id } = this.props.params
    let { loading } = this.props
    console.log(this.props.patient)

      if (loading) {
        return(<div/>);
      } else {
        return(
          <div>
            <Link to="/">Back</Link>
            ID {id}
            Patient { patient.id } <br/>
            First: { patient.firstName } <br/>
            Last: { patient.lastName } <br/>
          </div>
        );
      }
  }
};
