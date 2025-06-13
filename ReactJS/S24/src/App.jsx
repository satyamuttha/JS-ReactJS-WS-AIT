import { useState } from "react";
import Nav from "./components/nav/Nav";
import User from "./redux/components/User";
import Details from "./redux/components/Details";
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
      <User />
      <hr />
      <Details />
    </div>
  );
}

export default App;
