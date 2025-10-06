import React from 'react';

const items = [
  { id: 1, name: 'Burger', price: 120 },
  { id: 2, name: 'Pizza', price: 250 },
  { id: 3, name: 'Fries', price: 80 },
  { id: 4, name: 'Pasta', price: 180 },
];

function Dashboard({ addToCart }) {
  return (
    <div className="page">
      <h2>Menu</h2>
      <div className="items">
        {items.map(item => (
          <div key={item.id} className="card">
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard