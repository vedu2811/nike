import React, { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'>
                  {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img
            src={hamburger}
            alt='Hamburger'
            height={25}
            width={25}
            className='cursor-pointer'
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className='lg:hidden absolute top-full left-0 w-full bg-white flex flex-col items-center gap-6 py-6 shadow-md z-50'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat text-lg text-slate-gray'
                onClick={() => setIsMenuOpen(false)} // close on click
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Nav;
