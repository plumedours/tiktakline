import { useState, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import Logo from '../assets/logo.png';

const Navbar = ({ openModalRules, openModalAbout, openModalContact, resetGame }) => {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef();
  const location = useLocation();

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <div className='relative bg-my-gray-dark text-white'>
      {navOpen && (
        <div
          className='fixed inset-0 bg-black opacity-50 z-40'
          onClick={closeNav}
        />
      )}

      <div className='max-w-screen-lg mx-auto flex justify-between items-center px-4 py-3'>
        <Link to="/">
          <img src={Logo} alt='logo' className='w-40' />
        </Link>

        {/* Mobile Navigation Icon */}
        <div className='md:hidden'>
          <button onClick={toggleNav}>
            {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex space-x-4'>
          <NavItem text='Acceuil' to="/" />
          <NavItem text='Règles' onClick={openModalRules} />
          {location.pathname === "/game" || location.pathname.startsWith("/game/") && <NavItem text='Rejouer' to="/game" onClick={resetGame} />}
          <NavItem text='À propos' onClick={openModalAbout} />
          <NavItem text='Contact' onClick={openModalContact} />
        </ul>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        ref={navRef}
        className={`fixed inset-y-0 -left-5 bg-my-gray-dark text-white w-1/2 px-4 transition-transform duration-300 z-50 ${navOpen ? 'translate-x-5' : '-translate-x-full'
          }`}
      >
        <div className='max-w-screen-lg mx-auto py-4'>
          <Link to="/" onClick={closeNav}>
            <img src={Logo} alt='logo' className='w-36 mb-5' />
          </Link>
          <ul className='space-y-2'>
            <NavItem text='Acceuil' to="/" onClick={closeNav} />
            <NavItem text='Règles' onClick={() => {
              closeNav();
              openModalRules();
            }} />
            {(location.pathname === "/game" || location.pathname.startsWith("/game/")) && (
              <NavItem
                text="Rejouer"
                onClick={() => {
                  resetGame();
                  closeNav(); // Assurez-vous de définir la fonction closeNav où nécessaire
                }}
              />
            )}
            <NavItem text='À propos' onClick={() => {
              closeNav();
              openModalAbout();
            }} />
            <NavItem text='Contact' onClick={() => {
              closeNav();
              openModalContact();
            }} />
          </ul>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ text, to, onClick }) => {
  return (
    <li className='cursor-pointer hover:bg-my-blue-light hover:rounded-md py-2 px-4 hover:text-my-gray-dark font-bold' onClick={onClick}>
      <Link to={to}>{text}</Link>
    </li>
  );
};

export default Navbar;

Navbar.propTypes = {
  openModalRules: PropTypes.func.isRequired,
  openModalAbout: PropTypes.func.isRequired,
  openModalContact: PropTypes.func.isRequired,
  resetGame: PropTypes.func,
};

NavItem.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
};
