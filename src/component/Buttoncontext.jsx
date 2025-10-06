import React, { useState } from "react";

const productList = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
  { id: 6, name: "Product 6", price: 60 },
  { id: 7, name: "Product 7", price: 70 },
  { id: 8, name: "Product 8", price: 80 },
  { id: 9, name: "Product 9", price: 90 },
  { id: 10, name: "Product 10", price: 100 },
];

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");

  const addToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      setMessage("Product is already included in the cart");
      return;
    }
    if (cart.length >= 3) {
      setMessage("The cart is full");
      return;
    }
    console.log(product)
    console.log(cart)

    setCart([...cart, product]);

    setMessage("");
  };

  return (
    <div>
      <h1>ShoppingCart_React</h1>
      <h2 id="message">{message}</h2>

      <div id="ProductLists">
        <h2>Products</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {productList.map((product) => (
            <div key={product.id} className="product card" style={{ padding: "10px", border: "1px solid #ccc" }}>
              <p>
                {product.name} - ${product.price}
              </p>
              <button
                onClick={() => addToCart(product)}
    
              >
                {cart.find((item) => item.id === product.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div id="cart" className="cartitem">
        <h2>Cart</h2>
        {cart.length === 0 && <p>No items in cart</p>}
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}