import React, { useState } from 'react';
import DamlerLogo from '../assets/DamlerLogo.png';
import DayNightToggle from './DayNightToggle';  // Import the new component
import { Link } from 'react-router-dom';

function Navbar() {
  const [activeLink, setActiveLink] = useState('Models');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsDropdownOpen(false); // Close the dropdown when another link is clicked
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText shadow-md  py-4 px-8 flex items-center z-10 relative">
      {/* roundedfullpy-4 px-8
      mx-4 mt-6  */}
      <div className="flex items-center justify-between w-full max-w-5xl">
        {/* Logo */}
        <div className="flex items-center">
          <img src={DamlerLogo} alt="Logo" className="h-10" />
        </div>

        {/* Nav Links */}
        <div className="flex space-x-8 items-center ml-auto">
          <div className="relative">
            <button
              className={`${
                activeLink === 'Models'
                  ? 'bg-black text-white'
                  : 'text-gray-700 dark:text-white hover:text-black dark:hover:text-gray-300'
              } py-2 px-6 rounded-full`}
              onClick={toggleDropdown}
            >
              Models
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-darkBackground text-gray-700 dark:text-white rounded-lg shadow-lg z-20">
                {/* <Link
                  to='/truckviewer'
                  className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-t-lg"
                  onClick={() => handleLinkClick('BlueTruck')}
                >
                 BlueTruck
                </Link>
              */}
                <a
                  href="#trucks"
                  className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-b-lg"
                  onClick={() => handleLinkClick('Trucks')}
                >
                  Trucks
                </a>
              </div>
            )}
          </div>
          <a
            href="#"
            className={`${
              activeLink === 'Beyond'
                ? 'bg-black text-white'
                : 'text-gray-700 dark:text-white hover:text-black dark:hover:text-gray-300'
            } py-2 px-6 rounded-full`}
            onClick={() => handleLinkClick('Beyond')}
          >
            Beyond
          </a>
          <a
            href="#"
            className={`${
              activeLink === 'Ownership'
                ? 'bg-black text-white'
                : 'text-gray-700 dark:text-white hover:text-black dark:hover:text-gray-300'
            } py-2 px-6 rounded-full`}
            onClick={() => handleLinkClick('Ownership')}
          >
            Ownership
          </a>
          <a
            href="#"
            className={`${
              activeLink === 'Configurator'
                ? 'bg-black text-white'
                : 'text-gray-700 dark:text-white hover:text-black dark:hover:text-gray-300'
            } py-2 px-6 rounded-full`}
            onClick={() => handleLinkClick('Configurator')}
          >
            Configurator
          </a>

          {/* Day/Night toggle added here */}
          <DayNightToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
