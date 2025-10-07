import React from 'react';
import { Link } from 'react-router-dom';

 function Navbar({ cartCount }) {
  return (
    <nav className="navbar" style={{marginLeft : "4px" , display : "flex" , justifyContent : "center" , gap : "1100px"}} >
      <div><h1>🍔 Food Cart</h1></div>
      
      <div className="nav-links">
        <Link to="/" style={{paddingLeft : "20px"}}><button>Dashboard</button></Link>
        <Link to="/cart" style={{paddingLeft : "20px"}}><button>Cart ({cartCount})</button> </Link>
        
      </div>
    </nav>
  );
}
export default Navbar