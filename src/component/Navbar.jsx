import React from 'react';
import { Link } from 'react-router-dom';

 function Navbar({ cartCount }) {
  return (
    <nav className="navbar" style={{marginLeft : "4px"}} >
      <h2>🍔 Food Cart</h2>
      <div className="nav-links">
        <Link to="/" style={{paddingLeft : "10px"}}>Dashboard</Link>
        <Link to="/cart" style={{paddingLeft : "10px"}}>Cart ({cartCount})</Link>
        
      </div>
    </nav>
  );
}
export default Navbar