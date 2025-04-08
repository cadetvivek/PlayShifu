// src/components/FreeGames.jsx
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './FreeGames.css'
function FreeGames() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const games = [
    {
      name: "Flower Garden",
      image: "https://placehold.co/300x200?text=Game+1",
      description: "Grow a virtual garden and learn about plants"
    },
    {
      name: "Counting with Animals",
      image: "https://placehold.co/300x200?text=Game+2",
      description: "Count animals and learn numbers"
    },
    {
      name: "Monster Match",
      image: "https://placehold.co/300x200?text=Game+3",
      description: "Match colors and shapes with friendly monsters"
    },
    {
      name: "Tiny Town Puzzle",
      image: "https://placehold.co/300x200?text=Game+4",
      description: "Build a town and learn about community"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % games.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + games.length) % games.length);
  };

  return (
    <div className="free-games">
      <h2 className="section-title">Free In-App Games</h2>
      <p className="games-subtitle">The PlayKidz app has free complementary PlayApp apps</p>
      
      <div className="games-slider">
        <button className="slider-nav prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <div className="games-container">
          {games.map((game, index) => (
            <div 
              key={index} 
              className={`game-card ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="game-image">
                <img src={game.image} alt={game.name} />
              </div>
              <h3 className="game-name">{game.name}</h3>
              <p className="game-description">{game.description}</p>
            </div>
          ))}
        </div>
        <button className="slider-nav next" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default FreeGames;