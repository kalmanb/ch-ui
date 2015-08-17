var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var patient = React.createClass({
  render() {
    let id = 'tbc';
    return(
      <div>
      <Link to="/">Back</Link>
      Patient { id }
      </div>
    );
  }
});

module.exports = patient;