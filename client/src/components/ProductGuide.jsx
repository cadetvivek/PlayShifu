// src/components/ProductGuide.jsx
import React from 'react';
import guideImage from '../assets/images/game1.png';
import './ProductGuide.css'
function ProductGuide() {
  return (
    <div className="product-guide">
      <div className="guide-content">
        <img src={guideImage} alt="Guide Mascot" className="guide-mascot" />
        <div className="guide-text">
          <h2>Product Guide</h2>
          <button className="guide-btn">View User Manual</button>
        </div>
      </div>
    </div>
  );
}

export default ProductGuide;
