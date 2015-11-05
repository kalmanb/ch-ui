import altInstance from '../altInstance';
import PatientSource from '../sources/PatientSource';

import { createActions } from 'alt/utils/decorators';

@createActions(altInstance)
class PatientActions {
  updatePatient(patient) {
    this.dispatch(patient);
  }

  patientFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

  fetchPatient(id) {
    console.log('aaa :' + id)
    // PatientSource.fetchPatient(id).then((patient) => {
    //   this.actions.updatePatient(patient);
    // });
    this.dispatch();
  }

  updatePatient(patient) {
    this.dispatch(patient);
  }
}

export default PatientActions;
