// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/profile" className="navbar-link">Profile</Link>
        <Link to="/dashboard" className="navbar-link">Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;
