import React from "react";

const Home = () => {
  return (
    <div style={styles.container} className="fade-in">
      <h1 style={styles.heading}>Welcome Home!</h1>
      <p style={styles.text}>
        You have successfully logged in. This is your home page.
      </p>
    </div>
  );
};

export default Home;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, #43cea2, #185a9d)",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
    animation: "fadeIn 1s ease-in-out",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  text: {
    fontSize: "1.2rem",
    maxWidth: "600px",
  },
};
