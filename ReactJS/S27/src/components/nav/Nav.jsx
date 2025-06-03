import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {
  const usern_name = useSelector((store) => {
    return store.name;
  });

  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/products">Products</Link>

      <Link to="/cart">Cart</Link>
      <Link to="/login">Login</Link>
      <p style={{ color: "green", fontSize: "21px" }}>{usern_name}</p>
    </div>
  );
}

export default Nav;
