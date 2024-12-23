import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import CategoryMenu from './components/CategoryMenu';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import ToysSection from './components/ToysSection';
import Login from './components/Login';
import Signup from './components/Signup';
import './index.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <CategoryMenu />
      
      {children}

      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route
          path="/home"
          element={
            <Layout>
              <HeroSection />
              <ProductSection />
              <ToysSection />
            </Layout>
          }
        />
        <Route
          path="/products"
          element={
            <Layout>
              <ProductSection />
            </Layout>
          }
        />
        <Route
          path="/toys"
          element={
            <Layout>
              <ToysSection />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
