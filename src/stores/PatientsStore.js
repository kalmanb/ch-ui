var alt = require('../alt.js');
var PatientActions = require('../actions/PatientActions');
var PatientsSource = require('../sources/PatientsSource');

class PatientsStore {
  constructor() {
    this.patients = [];
    this.loading = false;
    this.errorMessage = "";
    this.bindListeners({
      handleUpdatePatients: PatientActions.UPDATE_PATIENTS,
      handleFetchPatients: PatientActions.FETCH_PATIENTS,
      handlePatientsFailed: PatientActions.PATIENTS_FAILED,
    });

    this.exportAsync(PatientsSource);
  }

  handleUpdatePatients(patients) {
    this.patients = patients;
    this.errorMessage = "";
    this.loading = false;
  }

  handleFetchPatients() {
    this.patients = [];
    this.loading = true;
  }

  handlePatientsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

module.exports = alt.createStore(PatientsStore, 'PatientsStore')
