import altInstance from '../altInstance';
import PatientsSource from '../sources/PatientsSource';

import { createActions } from 'alt/utils/decorators';

@createActions(altInstance)
class PatientsActions {
  updatePatients(patients) {
    this.dispatch(patients);
  }

  patientsFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

  fetchPatients(searchText) {
    PatientsSource.fetchPatients(searchText).then((patients) => {
      this.actions.updatePatients(patients);
    });
    this.dispatch();
  }

  updatePatients(patients) {
    this.dispatch(patients);
  }
}

export default PatientsActions;
