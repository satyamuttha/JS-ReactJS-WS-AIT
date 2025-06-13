import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import cartActionCreator from "./action-creator/cartActionCreator";
import { useDispatch } from "react-redux";

function Product({ product }) {
  const dispatch = useDispatch();
  const addToCart = (product) => {
    const cartAction = cartActionCreator(product);
    dispatch(cartAction);
    alert("Added into the cart");
  };

  return (
    <div className="card">
      <img src={product.image} width={"100%"} height={200} />
      <h4>{product.title}</h4>

      <p>${product.price}</p>

      <Link to={`/productdetails/${product.id}`}>
        <button>Product Details</button>
      </Link>

      <button
        onClick={() => {
          addToCart(product);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
