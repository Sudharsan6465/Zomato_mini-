import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cart, remove, updateQty }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty. <Link to="/">Go back to Menu</Link></p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={e => updateQty(item.id, Number(e.target.value))}
              />
              <span>₹{item.price * item.quantity}</span>
              <button onClick={() => remove(item.id)}>Remove</button>
            </div>
          ))}
          <hr />
          <p>Subtotal: ₹{subtotal}</p>
          <p>Tax (5%): ₹{tax.toFixed(2)}</p>
          <h3>Total: ₹{total.toFixed(2)}</h3>
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart
