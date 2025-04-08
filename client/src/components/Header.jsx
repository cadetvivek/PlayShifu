import React, { useState } from 'react';
import logoImage from '../assets/playshifu-logo.webp';
import './Header.css'

function Header({ cartCount }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <div className="header-top">
        <div className="header-top-content container">
          <marquee behavior="scroll" direction="left" scrollamount="5" className="promo-marquee">
            <span className="promo-text">✨ Never-before offers - Upto 25% OFF! ✨</span>
            <span className="promo-separator">|</span>
            <span className="promo-text">🎁 Free Shipping on orders above ₹999 🎁</span>
            <span className="promo-separator">|</span>
            <span className="promo-text">🎯 Extra 10% off on first purchase 🎯</span>
            <span className="promo-separator">|</span>
            <span className="promo-text">💫 Buy 2 Get 1 Free on selected items 💫</span>
          </marquee>
        </div>
      </div>
      <div className="main-header">
        <div className="container">
          <div className="logo">
            <img src={logoImage} alt="PlayKidz Logo" />
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search for products..." />
            <button className="search-button">Search</button>
          </div>
          <div className="header-actions">
            <button className="login-button">Login</button>
            <div className="cart-icon">
              <span className="material-icons">shopping_cart</span>
              <span className="cart-count">{cartCount}</span>
            </div>
          </div>
        </div>
      </div>
      <nav className="main-nav">
        <div className="container">
          <button className="mobile-menu-toggle" onClick={() => setShowMenu(!showMenu)}>
            <span className="material-icons">menu</span>
          </button>
          <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
            <li className="dropdown">
              <a href="#" className="nav-link">Shop By Category<span className="material-icons">arrow_drop_down</span></a>
              <div className="dropdown-content">
                <a href="#">Learning Toys</a>
                <a href="#">Puzzles</a>
                <a href="#">STEM Toys</a>
                <a href="#">Arts & Crafts</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-link">Shop By Age<span className="material-icons">arrow_drop_down</span></a>
              <div className="dropdown-content">
                <a href="#">0-2 Years</a>
                <a href="#">3-5 Years</a>
                <a href="#">6-8 Years</a>
                <a href="#">9+ Years</a>
              </div>
            </li>
            <li><a href="#" className="nav-link super-deals">Super Deals</a></li>
            <li><a href="#" className="nav-link">New Arrivals</a></li>
            <li><a href="#" className="nav-link">Bestsellers</a></li>
            <li><a href="#" className="nav-link">Shop All</a></li>
            <li className="dropdown">
              <a href="#" className="nav-link">More<span className="material-icons">arrow_drop_down</span></a>
              <div className="dropdown-content">
                <a href="#">Gift Cards</a>
                <a href="#">Offers</a>
                <a href="#">Blog</a>
                <a href="#">About Us</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;