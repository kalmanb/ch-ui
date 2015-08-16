var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var App = require('./components/app.jsx')
var PersonSearch = require('./components/personsearch.jsx')
var About = require('./components/about.jsx')

var routes = (
  <Route handler={App}>
    <DefaultRoute handler={PersonSearch}/>
    <Route path="about" handler={About}/>
  </Route>
);

module.exports = routes;