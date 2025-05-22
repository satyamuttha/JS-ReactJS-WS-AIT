import axios from "axios";

export const getProducts = (setProducts) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      console.log("then", res.data);
      setProducts(res.data);
    })
    .catch((error) => {
      console.log("error", error);
    });
};
