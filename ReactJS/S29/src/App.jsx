import { useState, lazy, Suspense } from "react";
import Nav from "./components/nav/Nav";
import axios from "axios";
import Home from "./components/context-Task/Home.jsx";

import Login from "./components/context-Task/Login.jsx";

import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/page-not-found/PageNotFound.jsx";

import Cart from "./pages/cart/Cart.jsx";
import Users from "./components/APIs/Users.jsx";
import CreateUser from "./components/APIs/CreateUser.jsx";
import UpdateUser from "./components/APIs/Update.jsx";

const Profile = lazy(() => import("./pages/profile/Profile.jsx"));
const Products = lazy(() => import("./pages/products/Products.jsx"));
const ProductDetails = lazy(() =>
  import("./pages/product-details/ProductDetails.jsx")
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(true);
  const [updateUser, setUpdateUser] = useState({
    name: "",
    city: "",
    email: "",
    gender: "",
  });
  const [users, setUsers] = useState([]);

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

  const getUsers = async () => {
    const res = await axios.get("http://localhost:3000/users");
    setUsers(res.data);
  };

  return (
    <div>
      <Nav />
      {/* <div style={{ display: "grid", gridTemplateColumns: "40% 60%" }}>
        {showCreateForm ? (
          <CreateUser getUsers={getUsers} />
        ) : (
          <UpdateUser
            getUsers={getUsers}
            update={setShowCreateForm}
            updateUserData={updateUser}
          />
        )}

        <Users
          users={users}
          getUsers={getUsers}
          update={setShowCreateForm}
          updateUserData={setUpdateUser}
        />
      </div> */}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route
          path={"/profile"}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Profile />
            </Suspense>
          }
        />
        <Route
          path={"/products"}
          element={
            <Suspense fallback={<h2 style={{ color: "red" }}>Loading...</h2>}>
              <Products />
            </Suspense>
          }
        />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/login"} element={<Login />} />
        <Route
          path={"/productdetails/:id"}
          element={
            <Suspense fallback={<h2>Loading...</h2>}>
              <ProductDetails />
            </Suspense>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
