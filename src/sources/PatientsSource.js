var PatientActions = require('../actions/PatientActions');

var patients = [{'id': 1,
                  'firstName': 'Kal',
                  'lastName': 'Bek',
                  'mobile': '021 555 5555'
                 },
                 {
                   'id': 2,
                   'firstName': 'Ele',
                   'lastName': 'Bek',
                   'mobile': '021 555 5555'
                 }];

var patient = {'id': 1,
                   'firstName': 'Kal',
                   'lastName': 'Bek',
               'mobile': '021 555 5555',
               'address1': '123 The St',

                  }

var PatientsSource = {
  fetchPatients() {
    return new Promise(function (resolve, reject) {
      // simulate an asynchronous flow where data is fetched on
      // a remote server somewhere.
      setTimeout(function () {

        // change this to `false` to see the error action being handled.
        if (true) {
          // resolve with some mock data
          resolve(patients);
        } else {
          reject('Things have broken');
        }
      }, 250);
    });
  },

  fetchPatient() {
    return new Promise(function (resolve, reject) {
      // simulate an asynchronous flow where data is fetched on
      // a remote server somewhere.
      setTimeout(function () {

        // change this to `false` to see the error action being handled.
        if (true) {
          // resolve with some mock data
          resolve(patient);
        } else {
          reject('Things have broken');
        }
      }, 250);
    });
  }
};

module.exports = PatientsSource;
