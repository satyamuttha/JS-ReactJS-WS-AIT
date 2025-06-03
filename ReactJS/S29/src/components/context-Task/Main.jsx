import { useContext } from "react";
import authContext from "./authContext";
import Login from "./Login";
import Home from "./Home";
function Main() {
  const { isLoggedIn } = useContext(authContext);
  return <div>{isLoggedIn ? <Home /> : <Login />}</div>;
}

export default Main;
