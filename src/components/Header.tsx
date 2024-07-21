import React from 'react';
import logo from '../assets/logo.png';
import { FaHandPeace } from 'react-icons/fa';

interface HeaderProps {
  onSayHelloClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSayHelloClick }) => {
  return (
    <header className="bg-white-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <img src={logo} alt="Logo" className="h-14 w-14 mr-4" />
        </a>
        <button
          className="bg-gradient-to-r from-blue-600 to-blue-900 hover:from-cyan-600 hover:to-yellow-400 text-lg py-2 px-6 rounded-lg transition-colors duration-300 flex items-center"
          onClick={onSayHelloClick}
        >
          <FaHandPeace className="w-6 h-6 mr-2" />
          Say Hello
        </button>
      </nav>
    </header>
  );
};

export default Header;
