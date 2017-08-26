import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';

import './ProductsList.scss';

class ProductsList extends React.Component {
  static propTypes = {
    products: PropTypes.array
  }

  render() {
    const products = this.props.products.map(product => (
      <Product
        key={product.id}
        {...product}
      />
    ));

    return (
      <div className="ProductsList">
        { products }
      </div>
    );
  }
}

export default ProductsList;
