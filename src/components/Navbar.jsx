import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";


function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logout } = useAuth();


  const navStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    backgroundColor: theme === "dark" ? "#333" : "#d9d9d9",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "20px",
  };


  const linkStyle = {
    textDecoration: "none",
    color: theme === "dark" ? "#fff" : "#333",
    fontWeight: "bold",
  };

  const buttonStyle = {
    backgroundColor: theme === "dark" ? "#f5a623" : "#4a76cf",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
  };


  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/blog" style={linkStyle}>Blog</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
      
      {user ? (
        <>
          <span style={{ color: theme === "dark" ? "#fff" : "#333" }}>Welcome, {user.username}</span>
          <button onClick={logout} style={{ ...buttonStyle, backgroundColor: "#d9534f" }}>Logout</button>
        </>
      ) : (
        <Link to="/login" style={linkStyle}>Login</Link>
      )}

      <button onClick={toggleTheme} style={buttonStyle}>
        Toggle {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
    </nav>
  );
}


export default Navbar;