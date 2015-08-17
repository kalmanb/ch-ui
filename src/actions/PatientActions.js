var alt = require('../alt');
var PatientSource = require('../sources/PatientsSource.js');

class PatientActions {
  updatePatients(patients) {
    this.dispatch(patients);
  }

  fetchPatients() {
    this.dispatch();
  }

  patientsFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

  fetchPatients(searchText) {
    PatientSource.fetchPatients().then((patients)=> {
      this.actions.updatePatients(patients);
    });
    this.dispatch();
  }

  updatePatients(patients) {
    this.dispatch(patients);
  }
}

module.exports = alt.createActions(PatientActions);