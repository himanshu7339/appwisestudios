import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'About Us', path: '/about' },
    { name: 'Privacy', path: '/privacy' },
    { name: 'Terms and Conditions', path: '/terms' },
  ];

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl  text-white hover:text-blue-400 transition-colors duration-300">
          AppwiseStudios
        </Link>

        {/* Navigation Links */}
        <nav>
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
    </header>
  );
};

export default Header;
