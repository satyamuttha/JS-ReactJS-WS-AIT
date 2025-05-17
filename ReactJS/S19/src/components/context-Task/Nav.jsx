import { useContext } from "react";
import authContext from "./authContext";

const Nav = () => {
  const { logout } = useContext(authContext);
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Context-API</div>
      <ul style={styles.navItems}>
        <li style={styles.navItem}>Home</li>
        <li style={styles.navItem}>Profile</li>
        <li style={styles.navItem}>Settings</li>
        <li style={styles.logoutButton} onClick={logout}>
          Logout
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#2d3748",
    color: "#fff",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  navItems: {
    display: "flex",
    gap: "20px",
    listStyleType: "none",
    margin: 0,
    padding: 0,
    alignItems: "center",
  },
  navItem: {
    cursor: "pointer",
    transition: "color 0.2s",
  },
  logoutButton: {
    cursor: "pointer",
    padding: "6px 12px",
    backgroundColor: "#e53e3e",
    color: "#fff",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
};
