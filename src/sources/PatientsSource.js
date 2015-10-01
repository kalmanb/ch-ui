import Firebase from 'firebase';
import Immutable from 'immutable';

import PatientActions from '../actions/PatientActions';
import Settings from '../settings.json'

// Connect to FB
const ref = new Firebase(Settings.firebaseUrl + "/patients");

var PatientsSource = {
  fetchPatients() {
    return new Promise((resolve, reject) => {
      ref.on("value", (snapshot) => {
        var patients = Immutable.Map(snapshot.val());
        resolve(patients);
      }, (errorObject) => {
        reject("The read failed: " + errorObject.code);
      });
    });
  },
  fetchPatient(key) {
    return new Promise((resolve, reject) => {
      // not sure if this works yet - maybe should be in PatientSource?
      ref.child(key).on("value", (snapshot) => {
        var patient = snapshot.val();
        console.log("got patient:");
        console.log(patient);
        resolve(patient);
      }, (errorObject) => {
        reject("The read failed: " + errorObject.code);
      });
    });
  }
};

export default PatientsSource;
