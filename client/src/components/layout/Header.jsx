import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get current location

  // Define navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
    { name: "About Us", path: "/about" },
    { name: "Privacy", path: "/privacy" },
    { name: "Terms and Conditions", path: "/terms" },
  ];

  // Check if the current URL starts with '/dashboard'
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  // Don't render the header on dashboard routes
  if (isDashboardRoute) return null;

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl text-white hover:text-blue-400 transition-colors duration-300"
        >
          AppwiseStudios
        </Link>

        {/* Hamburger Menu Icon */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-sm hover:text-blue-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 w-64 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:hidden`}
      >
        <button
          className="text-white text-xl p-4"
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>
        <ul className="flex flex-col space-y-4 p-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="text-sm hover:text-blue-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)} // Close menu after clicking a link
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
