import React from "react";
import "./Product.css";
function Product({ product }) {
  return (
    <div className="card">
      <img src={product.image} width={"100%"} height={200} />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <button>Product Details</button>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
