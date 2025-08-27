import { useState } from "react";
import logo from "../svg/logo.svg";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      
      <div className={`nav-links ${menuOpen ? "show" : ""}`}>
        <a className="active" href="#">
          Home
        </a>
        <a href="#">Our Services</a>
        <a href="#">About Us</a>
        <a href="#">Contact us</a>
      </div>

      
      <div className={`nav-actions ${menuOpen ? "show" : ""}`}>
        <button className="btn btn-outline">Become a Vendor</button>
        <button className="btn btn-primary">Plan Your Event</button>
      </div>
    </nav>
  );
}

export default Navbar;
