var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var personSearch = React.createClass({
  returnSomething(something) {
    return something;
  },
  render() {
    let version = 'abc';

    return (
      <div>
        <span>version {version}</span>
        <nav className="blue darken-2">
          <div className="nav-wrapper container">
            <Link to="/about" className="brand-logo">About</Link>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = personSearch;
