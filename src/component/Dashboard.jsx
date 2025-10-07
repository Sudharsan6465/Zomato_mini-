import React from 'react';
import "./Dashboard.css"
const items = [
  { id: 1, name: 'Burger', price: 120 , image : "/Images/burger.webp" },
  { id: 2, name: 'Pizza', price: 250, image : "/Images/pizza.webp"},
  { id: 3, name: 'Fries', price: 80 , image : "/Images/fries.webp"},
  { id: 4, name: 'Pasta', price: 180 , image : "/Images/pasta2.webp"},
];

function Dashboard({ addToCart }) {
  return (
    <div className="page">
      <h1 style={{marginLeft : "20px" , fontFamily : "sans-serif"}}>Menu</h1>
      <div className="items">
        {items.map(item => (
          <div key={item.id} className="card">
            <img src = {item.image} style={{width : "600px" , height : "400px"}}/>
            <h2>{item.name}</h2>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard