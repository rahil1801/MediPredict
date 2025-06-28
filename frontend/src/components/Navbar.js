import React, { useState } from 'react';
import { Menu, X, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link className="flex items-center space-x-2 animate-fade-in" to="/">
            <Activity className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              MediPredict
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
              Home
            </a>
            <a href="#predict" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
              Predict
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
              About
            </a>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
                Home
              </a>
              <a href="#predict" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
                Predict
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
                About
              </a>
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-fit">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
