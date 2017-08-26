import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from '../Home/Home';
const Cart = () => {
  return (
    <div>Your cart is empty :(</div>
  );
};

import './App.scss';

class App extends React.Component {
  static propTypes = {
    name: PropTypes.string
  }

  constructor() {
    super();

    this.state = {
      products: [
        {
          id: 'goldFish',
          title: 'Gold Fish',
          description: 'A golden fish.',
          price: 10
        }
      ]
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </ul>
          </div>
          <div className="App-content">
            <Route exact path="/" render={props => (
              <Home products={this.state.products} />
            )} />
            <Route path="/cart" component={Cart} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
