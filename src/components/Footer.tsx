import React from "react";
import logo from "../assets/logo.png"; // Adjust the path as needed
import { FaTwitter, FaGithub } from "react-icons/fa"; // Import social media icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center p-20 bottom-0 w-full">
      <div className="flex flex-col items-center">
        <img src={logo} alt="Logo" className="w-20 h-20 mt-1 mb-18" />
        <div className=" max-w-2xl mx-auto my-8 mb-18">
          <h3 className="text-3xl font-semibold text-slate-200 leading-tight text-center">
            Levelling Up through Open Source <br /> & Skill Development.
          </h3>
        </div>
        <div className="flex space-x-6 mb-15 justify-center">
          <a
            href="https://twitter.com/adarshhhx100"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-blue-500 hover:border-blue-700 transition duration-300"
          >
            <FaTwitter className="text-6xl text-blue-500 hover:text-white" />
          </a>

          <a
            href="https://github.com/extremistLab"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-gray-700 hover:border-gray-900 transition duration-300"
          >
            <FaGithub className="text-6xl text-gray-700 hover:text-white" />
          </a>
        </div>

        <p className="mt-10">
          &copy; This Portfolio Handcrafted by Sir Adarsh Chaturvedi in 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
