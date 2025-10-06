import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Dashboard from './component/Dashboard';
import Cart from './component/Cart';
//import Checkout from './component/Checkout';

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart(prev => {
      const existing = prev.find(p => p.id === item.id);
      if (existing) {
        return prev.map(p =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(item => item.id !== id));
  }

  function updateQuantity(id, qty) {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
      )
    );
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <div>
      <Navbar cartCount={cart.reduce((a, c) => a + c.quantity, 0)} />
      <Routes>
        <Route path="/" element={<Dashboard addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} remove={removeFromCart} updateQty={updateQuantity} />}
        />
        
      </Routes>
    </div>
  );
}
