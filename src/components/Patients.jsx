import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';

import PatientLine from './PatientLine.jsx';
import PatientsStore from '../stores/PatientsStore';
import PatientActions from '../actions/PatientActions';

@connectToStores
class Patients extends Component {

  constructor() {
    super();
    this.search = this.search.bind(this);
  };

  // Using connectToStores 
  static getStores() {
    return [PatientsStore];
  }
  static getPropsFromStores() {
    return PatientsStore.getState();
  }
  
  search(evt) {
    evt.preventDefault();
    var searchText = this.refs.searchText.getDOMNode().value;
    PatientActions.fetchPatients(searchText);
  }

  renderPatients() {
    return this.props.patients.map((patient) => {
      return(
        <PatientLine key={patient.id} patient={patient} />
      )
    });
  }

  renderLoading() {
    if (this.props.loading) {
      return (
        <div className='progress blue darken-2'>
          <div className='indeterminate blue lighten-3'></div>
        </div>
      )
    } else {
      return ''
    }
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.search}>
          <div className='input-field'>
            <label>Search Patients</label>
            <input type='text' ref='searchText'  />
          </div>
        </form>

        { this.renderLoading() }

        <table className="striped">
          { this.renderPatients() }
        </table>
      </div>
    );
  }
};

export default Patients;