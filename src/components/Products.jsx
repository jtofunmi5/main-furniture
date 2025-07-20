// src/components/Product.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ProductsData from '../data/product'; 

const Product = ({ category }) => {
  const filtered = category
    ? ProductsData.filter(product =>
        product.categories?.includes(category.toLowerCase())
      )
    : ProductsData;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {filtered.map(product => (
        <div
          key={product.id}
          className="border p-4 rounded shadow hover:shadow-lg transition duration-300"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-48 w-full object-cover mb-2 rounded"
          />
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-green-700 font-bold">
            ₦{product.price.toLocaleString()}
          </p>
          <Link
            to={`/product/${product.id}`}
            className="text-sm text-blue-600 hover:underline mt-2 inline-block"
          >
            View Product
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Product;
