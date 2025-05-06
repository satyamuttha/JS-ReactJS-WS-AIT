import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

// createRoot(document.getElementById("root")).render(
//   <>
//     <App />
//     <Header />
//     <Footer />
//   </>
// );

createRoot(document.getElementById("root")).render(<App />);
