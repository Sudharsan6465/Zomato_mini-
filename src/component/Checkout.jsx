import React from 'react';
import { Link } from 'react-router-dom';

function Checkout({ cart, clearCart }) {
  if (cart.length === 0) {
    return (
      <div className="page">
        <h2>Checkout</h2>
        <p>No items in cart. <Link to="/">Go to Menu</Link></p>
      </div>
    );
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0) * 1.05;

  return (
    <div className="page">
      <h2>Order Summary</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <span>{item.name} × {item.quantity}</span>
          <span>₹{item.price * item.quantity}</span>
        </div>
      ))}
      <hr />
      <h3>Total: ₹{total.toFixed(2)}</h3>
      <button onClick={clearCart}>Place Order</button>
      <p style={{ marginTop: '10px' }}><Link to="/">Back to Menu</Link></p>
    </div>
  );
}
export default Checkout