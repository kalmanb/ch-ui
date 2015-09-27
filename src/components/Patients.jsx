import React, { Component } from 'react';
import Link from 'react-router';

import PatientLine from './PatientLine.jsx';
import PatientsStore from '../stores/PatientsStore';
import PatientActions from '../actions/PatientActions';


class Patients extends Component {

  constructor() {
    super();
    this.state = PatientsStore.getState();
    this.search = this.search.bind(this);
    this.onChange = this.onChange.bind(this);
  };

  // getInitialState() {
  //   return PatientsStore.getState();
  // }
  componentDidMount() {
    PatientsStore.listen(this.onChange);
  }
  componentWillUnmount() {
    PatientsStore.unlisten(this.onChange);
  }
  onChange(state) {
    this.setState(state);
  }
  
  search(evt) {
    evt.preventDefault();
    var searchText = this.refs.searchText.getDOMNode().value;
    PatientActions.fetchPatients(searchText);
  }

  renderPatients() {
    return this.state.patients.map((patient) => {
      return(
        <PatientLine key={patient.id} patient={patient} />
      )
    });
  }

  renderLoading() {
    if (this.state.loading) {
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