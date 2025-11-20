import { Link } from "react-router-dom";

function HomePage() {
  const containerStyle = {
    textAlign: "center",
    padding: "50px 20px",
    maxWidth: "800px",
    margin: "0 auto",
  };

  const headingStyle = {
    fontSize: "3rem",
    color: "#333",
    marginBottom: "20px",
  };

  const subHeadingStyle = {
    fontSize: "1.2rem",
    color: "#666",
    marginBottom: "40px",
    lineHeight: "1.6",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  };

  const buttonStyle = {
    padding: "15px 30px",
    fontSize: "1.1rem",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "transform 0.2s ease",
  };

  const primaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#4a76cf",
    color: "white",
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: "white",
    color: "#4a76cf",
    border: "2px solid #4a76cf",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to My Blog App</h1>
      <p style={subHeadingStyle}>
        Discover interesting stories, share your thoughts, and connect with a community of readers.
        Join us today to start your journey!
      </p>
      <div style={buttonContainerStyle}>
        <Link to="/login" style={primaryButtonStyle}>
          Login
        </Link>
        <Link to="/blog" style={secondaryButtonStyle}>
          Explore Blog
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
