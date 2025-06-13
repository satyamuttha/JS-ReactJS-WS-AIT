import { useState } from "react";
import Nav from "./components/nav/Nav";

import Home from "./components/context-Task/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Login from "./components/context-Task/Login.jsx";
import Products from "./pages/products/Products.jsx";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/page-not-found/PageNotFound.jsx";
import ProductDetails from "./pages/product-details/ProductDetails.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Users from "./components/APIs/Users.jsx";
import CreateUser from "./components/APIs/CreateUser.jsx";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const appData = {
    isLoggedIn,
    login,
    logout,
  };

  return (
    <div>
      <Nav />
      <CreateUser />
      <Users />
      {/* <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/productdetails/:id"} element={<ProductDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes> */}
    </div>
  );
}

export default App;
