import altInstance from '../altInstance';
import PatientSource from '../sources/PatientsSource';

import { createActions } from 'alt/utils/decorators';

@createActions(altInstance)
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
    PatientSource.fetchPatientsFB().then((patients)=> {
      this.actions.updatePatients(patients);
    });
    this.dispatch();
  }

  updatePatients(patients) {
    this.dispatch(patients);
  }
}

export default PatientActions;
