import Immutable, { Map } from 'immutable';

import altInstance from '../altInstance.js';
import PatientActions from '../actions/PatientActions';
import PatientSource from '../sources/PatientSource';


import { createStore, datasource } from 'alt/utils/decorators';

@createStore(altInstance)
@datasource(PatientSource)
class PatientStore {
  constructor() {
    this.patient = {};
    this.loading = true;
    this.errorMessage = '';
    this.bindListeners({
      handleUpdatePatient: PatientActions.UPDATE_PATIENT,
      handleFetchPatient: PatientActions.FETCH_PATIENT,
      handlePatientFailed: PatientActions.PATIENT_FAILED,
    });
  }

  handleUpdatePatient(patient) {
    this.patient = patient;
    this.errorMessage = '';
    this.loading = false;
  }

  handleFetchPatient() {
    this.patient = [];
    this.loading = true;
  }

  handlePatientFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

export default PatientStore;
