import Immutable, { Map } from 'immutable';

import altInstance from '../altInstance.js';
import PatientsActions from '../actions/PatientsActions';
import PatientsSource from '../sources/PatientsSource';


import { createStore, datasource } from 'alt/utils/decorators';

@createStore(altInstance)
@datasource(PatientsSource)
class PatientsStore {
  constructor() {
    this.patients = Map();
    this.loading = false;
    this.errorMessage = '';
    this.bindListeners({
      handleUpdatePatients: PatientsActions.UPDATE_PATIENTS,
      handleFetchPatients: PatientsActions.FETCH_PATIENTS,
      handlePatientsFailed: PatientsActions.PATIENTS_FAILED,
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
