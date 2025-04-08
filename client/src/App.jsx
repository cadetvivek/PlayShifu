import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import ProductFeatures from './components/ProductFeatures';
import ProductGuide from './components/ProductGuide';
import DeviceCompatibility from './components/DeviceCompatibility';
import RelatedProducts from './components/RelatedProducts';
import InTheBox from './components/InTheBox';
import FreeGames from './components/FreeGames';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="app">
      <Header cartCount={cartItems.length} />
      <div className="container">
        <div className="navigation-path">
          <span>Home</span> &gt; <span>Toys</span> &gt; <span>Educational</span>
        </div>
        <ProductDetail addToCart={addToCart} />
        <ProductFeatures />
        <ProductGuide />
        <InTheBox />
        <FreeGames />
        <DeviceCompatibility />
        <RelatedProducts />
      </div>
      <Footer />
    </div>
  );
}

export default App;

