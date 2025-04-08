// src/components/ProductFeatures.jsx
import React from 'react';
import featureImg1 from '../assets/images/game1.png';
import featureImg2 from '../assets/images/game1.png';
import featureImg3 from '../assets/images/game1.png';
import featureImg4 from '../assets/images/game1.png';
import featureImg5 from '../assets/images/game1.png';
import featureImg6 from '../assets/images/game1.png';
import './ProductFeatures.css'
function ProductFeatures() {
  const features = [
    {
      title: "Hands-On Learning",
      description: "Physical objects and digital early experiences! Children touch, feel, create, and explore in the physical world.",
      image: featureImg1
    },
    {
      title: "Learn the Fundamentals",
      description: "Matching, sorting, patterns, sequencing, puzzles, numbers, and more!",
      image: featureImg2
    },
    {
      title: "Story-Based Learning",
      description: "Play in a learning space about topics with your child! Great stories for interactive kids.",
      image: featureImg3
    },
    {
      title: "Age-Adaptive Games",
      description: "The app updates challenges as your child's grade level adjusts, so they can learn at their own pace with continuous new content.",
      image: featureImg4
    },
    {
      title: "Holistic STEM Learning Pack",
      description: "From creative puzzles to fun science experiments to coding-style logical puzzles.",
      image: featureImg5
    },
    {
      title: "Skill Building",
      description: "Fine motor skill learning built carefully into each activity, strengthening, and guided movement.",
      image: featureImg6
    }
  ];

  return (
    <div className="product-features-section">
      <h2 className="section-title">About <span>Junior Genius Pack</span></h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-image">
              <img src={feature.image} alt={feature.title} />
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductFeatures;
