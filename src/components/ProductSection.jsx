import React from 'react';
import '../css/ProductSection.css';

const products = [
  { id: 1, title: 'Earbuds', img: '/productimages/earbuds.jpeg' },
  { id: 2, title: 'Watch', img: '/productimages/watch.jpeg' },
  { id: 3, title: 'Printer', img: '/productimages/printer.jpeg' },
  { id: 4, title: 'Monitor', img: '/productimages/monitor.jpeg' },
  { id: 5, title: 'Laptop', img: '/productimages/laptop.jpeg' },
  { id: 6, title: 'LED Tv', img: '/productimages/ledtv.jpeg' },
  { id: 7, title: 'Speaker', img: '/productimages/speaker.jpeg' },
  // { id: 8, title: 'Hair Dryer', img: '/productimages/hairdryer.jpeg' },
];

const ProductSection = () => {
  return (
    <div className="product-section">
      <h2>Best of Electronics</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.title} />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
