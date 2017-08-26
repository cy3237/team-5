import React from 'react';
import PropTypes from 'prop-types';

import './Product.scss';

class Product extends React.Component {
  static propTypes = {
    description: PropTypes.string,
    id: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string
  }

  render() {
    return (
      <div className="Product">
        <h5>{ this.props.title }</h5>
        <p>{ this.props.description }</p>
        <p>${ this.props.price }</p>
      </div>
    );
  }
}

export default Product;
