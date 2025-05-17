import { useState } from "react";
import Products from "./pages/products/Products.jsx";
import A from "./components/context-api/A.jsx";

import Nav from "./components/context-Task/Nav.jsx";
import Main from "./components/context-Task/Main.jsx";
import authContext from "./components/context-Task/authContext.js";

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
      <authContext.Provider value={appData}>
        {isLoggedIn ? <Nav /> : null}
        <Main />
      </authContext.Provider>
    </div>
  );
}

export default App;
