import React from 'react';
import '../css/CategoryMenu.css';

const categories = [
  { name: 'Grocery', img: '/images/grocery.png' },
  { name: 'Mobiles', img: '/images/mobile.png' },
  { name: 'Fashion', img: 'images/fashion.jpeg' },
  { name: 'Electronics', img: '/images/electronics.png' },
  { name: 'Home & Furniture', img: '/images/home and furniture.png' },
  { name: 'Appliances', img: '/images/appliances.png' },
  { name: 'Flight Bookings', img: '/images/flight.png' },
  { name: 'Beauty, Toys & More', img: '/images/beautyandtoys.png' },
  { name: 'Two Wheelers', img: '/images/scooter.png' },
];

const CategoryMenu = () => {
  return (
    <div className="category-menu">
      {categories.map((category, index) => (
        <div key={index} className="category-item">
          <img src={category.img} alt={category.name} className="category-icon" />
          <span>{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryMenu;
