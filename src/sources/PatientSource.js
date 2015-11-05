import Firebase from 'firebase';
import Immutable from 'immutable';

import PatientActions from '../actions/PatientActions';
import Settings from '../settings.json'

// Connect to FB
const ref = new Firebase(Settings.firebaseUrl + "/patients");

var PatientSource = {
  fetchPatient(id) {
    console.log("xxx :" + id)
    console.log(id)
    return new Promise((resolve, reject) => {
      ref.child(id).once("value", (snapshot) => {
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

export default PatientSource;
