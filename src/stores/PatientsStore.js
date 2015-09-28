import altInstance from '../altInstance.js';
import PatientActions from '../actions/PatientActions';
import PatientsSource from '../sources/PatientsSource';

import { createStore, datasource } from 'alt/utils/decorators';

@createStore(altInstance)
@datasource(PatientsSource)
class PatientsStore {
  constructor() {
    this.patients = [];
    this.loading = false;
    this.errorMessage = '';
    this.bindListeners({
      handleUpdatePatients: PatientActions.UPDATE_PATIENTS,
      handleFetchPatients: PatientActions.FETCH_PATIENTS,
      handlePatientsFailed: PatientActions.PATIENTS_FAILED,
    });
  }

  handleUpdatePatients(patients) {
    this.patients = patients;
    this.errorMessage = '';
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

export default PatientsStore;
