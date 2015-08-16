import React from 'react';

export default React.createClass({
  returnSomething(something) {
    return something;
  },
  render() {
    let version = "abc"

    return (
      <div>
        <span>version {version}</span>
      </div>
    );
  }
});
