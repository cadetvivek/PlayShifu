// FooterPage.jsx
import React from 'react';
import './Footer.css';
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaCheck, FaLock } from 'react-icons/fa';
import { FaCcVisa, FaCcMastercard, FaApplePay, FaGooglePay } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="page-container">
      {/* Header would go here in a real application */}
      
      {/* Main content area (placeholder) */}
      <main className="main-content">
        {/* Your main content would go here */}
      </main>
      
      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          {/* Benefits Bar */}
          <div className="benefits-bar">
            <div className="benefit-item">
              <span>Free Shipping</span>
            </div>
            <div className="benefit-item">
              <span>30 Days Return</span>
            </div>
            <div className="benefit-item">
              <div className="icon-circle">
                <FaCheck className="check-icon" />
              </div>
              <span>6 Months Warranty</span>
            </div>
            <div className="benefit-item">
              <div className="icon-square">
                <FaLock className="lock-icon" />
              </div>
              <span>Secure Checkout</span>
            </div>
          </div>
          
          <hr className="divider" />
          
          {/* Main Footer Content */}
          <div className="footer-content">
            {/* Newsletter */}
            <div className="footer-column newsletter-column">
              <div className="newsletter">
                <p>Get notified of new launches, product updates, contests, and more exciting news!</p>
                <button className="whatsapp-btn">Join our WhatsApp Community</button>
              </div>
              {/* Social Media Icons */}
              <div className="social-icons">
                <a href="#" aria-label="Facebook"><FaFacebook size={24} /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedin size={24} /></a>
                <a href="#" aria-label="Instagram"><FaInstagram size={24} /></a>
                <a href="#" aria-label="YouTube"><FaYoutube size={24} /></a>
              </div>
            </div>

            {/* Shop Column */}
            <div className="footer-column">
              <h3>Shop</h3>
              <ul>
                <li><a href="#">Problem Solving Toys</a></li>
                <li><a href="#">Stem Toys</a></li>
                <li><a href="#">Social & Emotional Development Toys</a></li>
                <li><a href="#">Birthday Gift Toys</a></li>
                <li><a href="#">Super Saver Deals</a></li>
                <li><a href="#">Best Seller Toys</a></li>
              </ul>
            </div>

            {/* More Column */}
            <div className="footer-column">
              <h3>More</h3>
              <ul>
                <li><a href="#">Device Compatibility</a></li>
                <li><a href="#">Free-E-Books</a></li>
                <li><a href="#">Parent Hub</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">About Us</a></li>
              </ul>
            </div>

            {/* Support Column */}
            <div className="footer-column">
              <h3>Support</h3>
              <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Return Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>
          </div>
          
          <hr className="divider" />
          
          {/* Copyright and Payment Options */}
          <div className="footer-bottom">
            <div className="copyright">
              <p>© 2025 PlayShifu.com</p>
            </div>
            <div className="payment-methods">
              <div className="payment-icon apple-pay"></div>
              <div className="payment-icon mastercard"></div>
              <div className="payment-icon visa"></div>
              <div className="payment-icon google-pay"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;