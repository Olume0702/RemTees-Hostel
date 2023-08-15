import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-900 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-semibold text-lg">
          <div className='bg-black text-white h-20 w-20 text-center pt-6 text-3xl rounded-md'>
            <div>RT</div>
          </div>
        </div>
        <div className="sm:hidden">
          <button
            className="text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {menuOpen && (
            <ul className="bg-gray-900 mt-2">
              <li>
                <a
                  href="#home"
                  className="block text-white hover:text-gray-600 py-2 px-4"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block text-white hover:text-gray-600 py-2 px-4"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="block text-white hover:text-gray-600 py-2 px-4"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block text-white hover:text-gray-600 py-2 px-4"
                >
                  Contact
                </a>
              </li>
            </ul>
          )}
        </div>
        <ul className="hidden sm:flex space-x-6 font-semibold text-2xl">
          <li>
            <a href="#home" className="text-white hover:text-gray-600">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-gray-600">
              About
            </a>
          </li>
          <li>
            <a href="#testimonials" className="text-white hover:text-gray-600">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-600">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
