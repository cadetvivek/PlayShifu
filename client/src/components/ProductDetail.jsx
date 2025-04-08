// src/components/ProductDetail.jsx
import React, { useState } from 'react';
import ProductGallery from './ProductGallery';
import './ProductDetail.css'
function ProductDetail({ addToCart }) {
  const [selectedColor, setSelectedColor] = useState('blue');
  const [quantity, setQuantity] = useState(1);
  
  const product = {
    id: 1,
    name: "Junior Genius Pack",
    category: "FunSchool® WorkSheet & PlayBlock™",
    price: 749,
    discountedPrice: 599,
    rating: 4.7,
    reviews: 83,
    colors: ['blue', 'green', 'yellow', 'red'],
    stock: 15,
    description: [
      "Truely Creative – Introduce a real-time play to enhance problem solving with creative thinking",
      "Picture Perfect – Step by step engaging activities for 3 to 7 years-olds",
      "Digital or Tablet using the Go to game online"
    ]
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      color: selectedColor,
      quantity
    });
    alert('Product added to cart!');
  };

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <div className="product-gallery-column">
          <ProductGallery />
        </div>
        <div className="product-info-column">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-category">{product.category}</p>
          
          <div className="product-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}>★</span>
              ))}
            </div>
            <span className="rating-value">{product.rating}</span>
            <span className="review-count">({product.reviews} Reviews)</span>
            <a href="#reviews" className="write-review">Write a review</a>
          </div>
          
          <div className="product-price">
            <span className="price">₹{product.discountedPrice}</span>
            <span className="original-price">₹{product.price}</span>
            <span className="discount-badge">
              {Math.round((1 - product.discountedPrice / product.price) * 100)}% OFF
            </span>
          </div>
          
          <div className="product-features">
            {product.description.map((feature, index) => (
              <div key={index} className="feature-item">
                <span className="feature-bullet">•</span>
                <p>{feature}</p>
              </div>
            ))}
          </div>
          
          <div className="product-actions">
            <div className="color-selection">
              <p>Color:</p>
              <div className="color-options">
                {product.colors.map(color => (
                  <button 
                    key={color}
                    className={`color-option ${color} ${selectedColor === color ? 'selected' : ''}`}
                    onClick={() => setSelectedColor(color)}
                  ></button>
                ))}
              </div>
            </div>
            
            <div className="quantity-selector">
              <p>Quantity:</p>
              <div className="quantity-control">
                <button 
                  className="quantity-btn minus" 
                  onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : 1)}
                >-</button>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1"
                />
                <button 
                  className="quantity-btn plus" 
                  onClick={() => setQuantity(prev => prev + 1)}
                >+</button>
              </div>
            </div>
            
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
            
            <button className="buy-now-btn">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
