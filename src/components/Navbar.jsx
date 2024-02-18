import { useState, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import Logo from '../assets/logo.png';

const Navbar = ({ openModalRules, openModalAbout, openModalContact }) => {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();

  const navRef = useRef();

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  const handleReplay = () => {
    window.location.reload();
  }

  const goHome = () => {
    navigate('/');
  }

  return (
    <div className='relative bg-my-gray-dark text-white'>
      {navOpen && (
        <div
          className='fixed inset-0 bg-black opacity-50 z-40'
          onClick={closeNav}
        />
      )}

      <div className='max-w-screen-lg mx-auto flex justify-between items-center px-4 py-3'>
        <img src={Logo} alt='logo' className='w-40' />

        {/* Mobile Navigation Icon */}
        <div className='md:hidden'>
          <button onClick={toggleNav}>
            {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex space-x-4'>
          <NavItem text='Acceuil' onClick={goHome} />
          <NavItem text='Règles' onClick={openModalRules} />
          <NavItem text='Rejouer' />
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
          <img src={Logo} alt='logo' className='w-36' />
          <ul className='space-y-2'>
            <NavItem text='Acceuil' onClick={closeNav} />
            <NavItem text='Règles' onClick={() => {
              closeNav();
              openModalRules();
            }} />
            <NavItem text='Rejouer' onClick={handleReplay} />
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

const NavItem = ({ text, onClick }) => {
  return (
    <li className='cursor-pointer hover:bg-my-blue-light hover:rounded-md py-2 px-4 hover:text-my-gray-dark font-bold' onClick={onClick}>
      {text}
    </li>
  );
};

export default Navbar;