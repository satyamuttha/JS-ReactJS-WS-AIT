import { useState, useEffect } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams(); // {id:1}
  const [state, setState] = useState({
    id: 0,
    image: null,
    title: "",
    price: 0,
    rating: { rate: 0, count: 0 },
    category: "",
    description: "",
  });

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setState(res.data);
      })
      .catch((error) => {
        alert("Failed to Access Product");
        console.log(error);
      });
  };
  return (
    <div className="productdetails">
      <h2>{state.category} Category</h2>
      <br />
      <img src={state.image} alt="" width={300} height={300} />
      <br />
      <h4>{state.title}</h4>
    </div>
  );
}

export default ProductDetails;
