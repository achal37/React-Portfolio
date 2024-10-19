import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 p-4">
    <ul className="flex justify-center space-x-4">
      <li><Link className="text-white hover:text-gray-400" to="/">Home</Link></li>
      <li><Link className="text-white hover:text-gray-400" to="/about">About</Link></li>
      <li><Link className="text-white hover:text-gray-400" to="/projects">Projects</Link></li>
      <li><Link className="text-white hover:text-gray-400" to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
