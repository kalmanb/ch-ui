// import MainPage from './components/mainpage.jsx';

// window.React = React;

// React.render(
//     <MainPage />, document.getElementById('content')
// );


var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var routes = require('./Routes.jsx');


Router.run(routes, Router.HashLocation, (Root) => {
    React.render(<Root/>, document.body);
});