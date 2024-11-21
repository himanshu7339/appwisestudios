import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'About Us', path: '/about' },
    { name: 'Privacy', path: '/privacy' },
    { name: 'Terms and Conditions', path: '/terms' },
  ];

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', icon: <FaFacebook /> },
    { name: 'Twitter', url: 'https://twitter.com', icon: <FaTwitter /> },
    { name: 'Instagram', url: 'https://instagram.com', icon: <FaInstagram /> },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: <FaLinkedin /> },
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
            AppwiseStudios
          </Link>
          
          {/* Social Media Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xl hover:text-blue-400 transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex justify-center space-x-6 mb-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-lg hover:text-blue-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} AppwiseStudios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
