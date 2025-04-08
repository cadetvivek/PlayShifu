// src/components/InTheBox.jsx
import React from 'react';
import crownImage from '../assets/gift.png';
import blocksImage from '../assets/gift.png';
import cardImage from '../assets/gift.png';
import boardImage from '../assets/images/game1.png';
import treeImage from '../assets/images/game1.png';
import tilesImage from '../assets/images/game1.png';
import './InTheBox.css'
function InTheBox() {
  const boxItems = [
    {
      name: "Crown",
      count: 1,
      image: crownImage
    },
    {
      name: "Tiles Set",
      count: 6,
      image: blocksImage
    },
    {
      name: "Activity Board",
      count: 1,
      image: boardImage
    },
    {
      name: "Smart Task Cards",
      count: 4,
      image: cardImage
    },
    {
      name: "Wooden Tree",
      count: 6,
      image: treeImage
    },
    {
      name: "Game Tiles",
      count: 12,
      image: tilesImage
    }
  ];

  return (
    <div className="in-the-box">
      <h2 className="section-title">In This Box</h2>
      <div className="box-items-grid">
        {boxItems.map((item, index) => (
          <div key={index} className="box-item">
            <div className="box-item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="box-item-info">
              <span className="box-item-count">{item.count} {item.count > 1 ? 'pcs' : 'pc'}</span>
              <span className="box-item-name">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InTheBox;
