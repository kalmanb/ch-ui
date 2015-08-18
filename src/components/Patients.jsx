var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var PatientLine = require('./PatientLine.jsx');
var PatientsStore = require('../stores/PatientsStore');
var PatientActions = require('../actions/PatientActions');


var patients = React.createClass({

  getInitialState() {
    return PatientsStore.getState();
  },
  componentDidMount() {
    PatientsStore.listen(this.onChange);
  },
  componentWillUnmount() {
    PatientsStore.unlisten(this.onChange);
  },
  onChange(state) {
    this.setState(state);
  },
  
  search(evt) {
    evt.preventDefault();
    var searchText = this.refs.searchText.getDOMNode().value;
    PatientActions.fetchPatients(searchText);
  },

  renderPatients() {
    return this.state.patients.map((patient) => {
      return(
        <PatientLine key={patient.id} patient={patient} />
      )
    });
  },

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
  },
  
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
});

module.exports = patients;
