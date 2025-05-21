import { useState } from "react";
import Nav from "./components/nav/Nav";
import Home from "./components/context-Task/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Login from "./components/context-Task/Login.jsx";
import Products from "./pages/products/Products.jsx";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/page-not-found/PageNotFound.jsx";
import ProductDetails from "./pages/product-details/ProductDetails.jsx";
import UseRefDemo from "./components/use-ref/UseRefDemo.jsx";
import RefDOM from "./components/use-ref/RefDOM.jsx";
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
      <RefDOM />

      <hr />

      <UseRefDemo />
    </div>
  );
}

export default App;
