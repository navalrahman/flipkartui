import React from 'react';
import Navbar from './components/Navbar';
import CategoryMenu from './components/CategoryMenu';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import ToysSection from './components/ToysSection';
import './index.css';

function App() {
  return (
    <div className="App">
      {/* header */}
      <Navbar />

      <CategoryMenu />
      <HeroSection />
      <ProductSection />
      <ToysSection/>
      
      {/* footer */}
      <Footer/>
    </div>
  );
}

export default App;
