import Firebase from 'firebase';
import Immutable from 'immutable';

import PatientActions from '../actions/PatientActions';
import Settings from '../settings.json'

// Connect to FB
const ref = new Firebase(Settings.firebaseUrl + "/patients");

var PatientsSource = {
  fetchPatients(searchText) {
    return new Promise((resolve, reject) => {
      ref.once("value", (snapshot) => {
        var patients = Immutable.Map(snapshot.val());
        resolve(patients);
      }, (errorObject) => {
        reject("The read failed: " + errorObject.code);
      });
    });
  }
};

export default PatientsSource;
