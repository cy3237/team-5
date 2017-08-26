import React from 'react';
import PropTypes from 'prop-types';

import ProductsList from '../ProductsList/ProductsList';

const Home = ({ products }) => {
  return (
    <div className="Home">
      <h3>The fish store</h3>
      <ProductsList products={products} />
    </div>
  );
};

Home.propTypes = {
  products: PropTypes.array
};

export default Home;
