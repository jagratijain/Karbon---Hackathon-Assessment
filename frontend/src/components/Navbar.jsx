// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-500 shadow mb-8">
      <div className="container mx-auto px-4 py-4">
        <ul className="flex space-x-4 justify-center">
          <li>
            <Link 
              to="/" 
              className={`text-white hover:text-blue-300 ${isActive('/') ? 'font-bold text-blue-300' : ''}`}>
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/results" 
              className={`text-white hover:text-blue-300 ${isActive('/results') ? 'font-bold text-blue-300' : ''}`}>
              Results
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
