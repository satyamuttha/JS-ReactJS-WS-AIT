import { useState } from "react";
import Nav from "./components/nav/Nav";
import Home from "./components/context-Task/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Login from "./components/context-Task/Login.jsx";
import Products from "./pages/products/Products.jsx";
import { Route, Routes } from "react-router-dom";

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
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/products"} element={<Products />} />
        <Route
          path={"/cart"}
          element={
            <h2
              style={{ textAlign: "center", marginTop: "100px", color: "red" }}
            >
              No Cart Component Developed Yet
            </h2>
          }
        />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
