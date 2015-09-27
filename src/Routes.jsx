import React from 'react';
import { Router, Route, IndexRoute, Link, NoMatch } from 'react-router';

import Main from './components/Main.jsx';
import Patients from './components/Patients.jsx';
import Patient from './components/Patient.jsx';

const Routes = (
  <Router>
    <Route path="/" component={Main}>
      <IndexRoute component={Patients} />
      <Route path="/patient" component={Patient} />
    </Route>
  </Router>
);

export default Routes;