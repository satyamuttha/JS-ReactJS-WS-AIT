import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
function Cart() {
  const cartData = useSelector((store) => {
    return store.cart;
  });
  return (
    <div className="cart">
      <table padding={"10px"} rules="rows" width={"100%"}>
        <thead>
          <tr>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {cartData.length > 0 &&
            cartData.map((cart) => {
              return (
                <tr align="center">
                  <td>
                    <img src={cart.image} width={70} height={70} />
                  </td>
                  <td>{cart.title}</td>
                  <td>${cart.price}</td>
                  <td>
                    <button>Remove</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
