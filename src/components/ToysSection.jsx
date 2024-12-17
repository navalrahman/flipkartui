import React from 'react';
import '../css/ToysSection.css';

const products = [
  { id: 1, title: 'Cycle', img: '/beautyfoodtoys/cycle1.png' },
  { id: 2, title: 'Remotecar', img: '/beautyfoodtoys/remotecar.png' },
  { id: 3, title: 'Dryfruits', img: '/beautyfoodtoys/dryfruits.png' },
  { id: 4, title: 'Gym Essential', img: '/beautyfoodtoys/gymessential.png' },
  { id: 5, title: 'Coffee powder', img: '/beautyfoodtoys/coffe.png' },
];

const ToysSection = () => {
  return (
    <div className="toys-section">
      <h2 className="toys-title">Beauty, Food, Toys & More...</h2>
      <div className="toys-list">
        {products.map((product) => (
          <div key={product.id} className="toys-card">
            <img className="toys-img" src={product.img} alt={product.title} />
            <p className="toys-name">{product.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToysSection;
