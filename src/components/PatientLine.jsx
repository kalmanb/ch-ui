var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var patientLine = React.createClass({
  render() {
    return(
      <tr>
      <td>{ this.props.patient.firstName } { this.props.patient.lastName }</td>
      <td>{ this.props.patient.mobile }</td>
      <td><Link to="/patient" params={{ id: this.props.patient.id }}>Details</Link></td>
      </tr>
    );
  }
});

module.exports = patientLine;