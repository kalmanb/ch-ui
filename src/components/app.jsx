var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var app = React.createClass({
  render() {
    return (
      <div>
        <div className='container'>
          <RouteHandler />
        </div>
      </div>
    )
  }
});

module.exports = app;