import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { text: 'Home', path: '/' },
    { text: 'Products', path: '/products' },
    { text: 'Categories', path: '/categories' },
    { text: 'New Arrivals', path: '/new-arrivals' },
    { text: 'Sale', path: '/sale' },
    { text: 'About', path: '/about' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <RouterLink to="/" className="navbar-logo">
          <img src="/logo.png" alt="NST Fashion" />
          <span>TryBee</span>
        </RouterLink>

        <button className="navbar-mobile-toggle" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <RouterLink
              key={link.text}
              to={link.path}
              className="navbar-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.text}
            </RouterLink>
          ))}
        </div>

        <div className="navbar-actions">
          <form className="navbar-search" onSubmit={handleSearch}>
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          <RouterLink to="/cart" className="navbar-cart">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-badge">3</span>
          </RouterLink>

          <RouterLink to="/login" className="navbar-button navbar-button-secondary">
            Login
          </RouterLink>
          <RouterLink to="/register" className="navbar-button navbar-button-primary">
            Register
          </RouterLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 