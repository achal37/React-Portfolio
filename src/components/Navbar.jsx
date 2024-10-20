import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import acc_img from '../assets/acc_img.png';

const Navbar = ({ toggleModal }) => (
  <nav className="fixed top-0 left-0 right-0 text-lg flex justify-between items-center bg-custom-green p-4 shadow z-10 font-sans">
    <Link to="/">
      <img src={acc_img} alt="Account logo" className="w-10 h-10 rounded-2xl" />
    </Link>
    <ul className="flex space-x-4">
      {['/', '/about'].map((path) => (
        <li key={path}>
          <NavLink
            className={({ isActive }) =>
              `text-white py-2 px-4 rounded-lg ${isActive ? 'bg-custom-teal' : 'hover:bg-teal-600'}`
            }
            to={path}
          >
            {path === '/' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2)}
          </NavLink>
        </li>
      ))}
      <li>
        <NavLink
          onClick={toggleModal}
          className="text-white py-2 px-4 rounded-lg border-2 border-custom-brown hover:bg-custom-brown"
        >
          Contact Me
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
