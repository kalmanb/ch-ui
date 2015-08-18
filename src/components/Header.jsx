var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
  render() {
    return (
      <nav className='blue darken-2'>
        <div className='nav-wrapper container'>
          <Link to='/' className='brand-logo'>Connect Health</Link>
        </div>
      </nav>
    );
  }
  });

module.exports = Header;