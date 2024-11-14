import React, { useState } from 'react';
import Product from './Product';
import SizeFilter from './SizeFilter';

const products = [
  { id: 1, name: 'T-shirt', price: 20, size: 'M' },
  { id: 2, name: 'Jeans', price: 50, size: 'L' },
  { id: 3, name: 'Jacket', price: 100, size: 'S' },
  { id: 4, name: 'Scarf', price: 30, size: 'XS' },
];

const ProductList = () => {
  const [filteredSize, setFilteredSize] = useState('All');
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const filteredProducts = filteredSize === 'All' ? products : products.filter(p => p.size === filteredSize);

  return (
    <div>
      <SizeFilter setFilteredSize={setFilteredSize} />
      <div className="product-list">
        {filteredProducts.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;