// src/components/ProductGallery.jsx
import React, { useState } from 'react';
import mainImage from '../assets/images/genius-thumb.png';
import thumb1 from '../assets/images/game1.png';
import thumb2 from '../assets/images/game1.png';
import thumb3 from '../assets/images/game1.png';
import thumb4 from '../assets/images/game1.png';
import thumb5 from '../assets/images/game1.png';
import thumb6 from '../assets/images/game1.png';
import './ProductGallery.css'
function ProductGallery() {
  const [currentImage, setCurrentImage] = useState(mainImage);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [mainImage, thumb1, thumb2, thumb3, thumb4, thumb5, thumb6];
  
  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setCurrentImage(images[newIndex]);
  };
  
  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setCurrentImage(images[newIndex]);
  };

  return (
    <div className="product-gallery">
      <div className="main-image-container">
        <button className="gallery-nav prev" onClick={prevImage}>❮</button>
        <img src={currentImage} alt="Junior Genius Pack" className="main-image" />
        <button className="gallery-nav next" onClick={nextImage}>❯</button>
      </div>
      <div className="thumbnails">
        {images.map((img, index) => (
          <div 
            key={index} 
            className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
            onClick={() => {
              setCurrentImage(img);
              setCurrentIndex(index);
            }}
          >
            <img src={img} alt={`Junior Genius Pack thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;