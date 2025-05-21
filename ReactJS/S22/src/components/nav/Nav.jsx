import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/products">Products</Link>

      <Link to="/cart">Cart</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Nav;
