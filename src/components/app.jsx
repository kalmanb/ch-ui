var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Header = require('./Header.jsx');

var app = React.createClass({
  render() {
    return (
      <div>
        <div className='container'>
          <Header />
          <RouteHandler />
        </div>
      </div>
    )
  }
});

module.exports = app;