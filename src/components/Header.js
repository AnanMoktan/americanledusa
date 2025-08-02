import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { categories } from "../data/products";
import { FaPhone } from "react-icons/fa";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div
          className="logo-and-phone"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="logo">
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/logo/amercan LED PRO.png"}
                alt="American LED pro Wholesale Logo"
              />
            </Link>
          </div>
          <div
            style={{
              color: "red",
              marginTop: "4px",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            <FaPhone /> 972-685-0112
          </div>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav className={`main-nav ${mobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">All Products</Link>
            </li>
            {categories.slice(0, 4).map((category) => (
              <li key={category.id}>
                <Link to={`/category/${category.id}`}>{category.name}</Link>
              </li>
            ))}
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <a
                href="https://www.ebay.com/str/americanledpro"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0b98e9e8", fontWeight: "bold" }}
              >
                eBay
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
