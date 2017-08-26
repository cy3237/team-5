import React from 'react';
import PropTypes from 'prop-types';

import './App.scss';

class App extends React.Component {
  static propTypes = {
    name: PropTypes.string
  }

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h3>Hello, {this.props.name}!</h3>
      </div>
    );
  }
}

export default App;
