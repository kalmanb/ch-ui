var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var App = require('./components/App.jsx')
var Patients = require('./components/Patients.jsx')
var Patient = require('./components/Patient.jsx')

var routes = (
  <Route handler={App}>
    <DefaultRoute handler={Patients}/>
    <Route path="patient" handler={Patient}/>
  </Route>
);

module.exports = routes;