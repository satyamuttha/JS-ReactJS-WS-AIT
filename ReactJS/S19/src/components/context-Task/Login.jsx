import { useState, useContext } from "react";
import authContext from "./authContext";

const Login = () => {
  const { login } = useContext(authContext);
  const [formData, setFormData] = useState({ username: "", password: "" });

  return (
    <div style={styles.container}>
      <form style={styles.form} className="fade-in">
        <h2 style={styles.heading}>Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          style={styles.input}
        />
        <button type="button" onClick={login} style={styles.button}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;

// Inline styles with animation support
const styles = {
  container: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #667eea, #764ba2)",
  },
  form: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
    width: "300px",
    textAlign: "center",
    animation: "fadeIn 1s ease-in",
  },
  heading: {
    marginBottom: "20px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    transition: "0.3s ease",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#667eea",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

// Add the following styles to your global CSS or use styled-components / CSS Modules
