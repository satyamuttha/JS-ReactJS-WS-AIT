import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
function Product({ product }) {
  return (
    <div className="card">
      <img src={product.image} width={"100%"} height={200} />
      <h4>{product.title}</h4>

      <p>${product.price}</p>

      <Link to={`/productdetails/${product.id}`}>
        <button>Product Details</button>
      </Link>

      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
