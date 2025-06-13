import React from "react";

const Profile = () => {
  const user = {
    name: "John Smith",
    email: "john.smith@example.com",
    bio: "Full Stack Developer | JavaScript Ninja | Coffee Lover ☕",
    avatar: "https://i.pravatar.cc/150?img=8",
  };

  return (
    <div style={styles.container}>
      <img src={user.avatar} alt="User Avatar" style={styles.avatar} />
      <h2 style={styles.name}>{user.name}</h2>
      <p style={styles.email}>{user.email}</p>
      <p style={styles.bio}>{user.bio}</p>
    </div>
  );
};

// Inline styles (CSS-in-JS)
const styles = {
  container: {
    maxWidth: "400px",
    margin: "2rem auto",
    padding: "1.5rem",
    textAlign: "center",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    fontFamily: "Segoe UI, sans-serif",
  },
  avatar: {
    width: "110px",
    height: "110px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "1rem",
  },
  name: {
    margin: "0.5rem 0",
    fontSize: "1.5rem",
  },
  email: {
    color: "#666",
    fontSize: "0.95rem",
    marginBottom: "0.5rem",
  },
  bio: {
    fontStyle: "italic",
    color: "#444",
  },
};

export default Profile;
