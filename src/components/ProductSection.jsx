import React, { useEffect, useState } from 'react';
import '../css/ProductSection.css';
import axios from 'axios';

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5050/api/product/product_details')
      .then((res) => {
        console.log(res.data);
        setProducts(res.data)
      })
      .catch((err) => {
        console.error('Error fetching product data:', err);
      });
  }, []);

  console.log(typeof products);
  
  return (
    <div className="product-section">
      <h2>Best of Electronics</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            {product.path ? (
              <img
                src={`http://localhost:5050${product.path}`}
                alt={product.title || 'Product Image'}
                className="product-image"
              />
            ) : (
              <div className="product-placeholder">No Image</div>
            )}
            <p>{product.title || 'No Title'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
