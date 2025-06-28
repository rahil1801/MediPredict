
import React from 'react';
import { Activity } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Activity className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">
                MediPredict
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Advanced medical insurance cost prediction using machine learning. 
              Get accurate estimates for your healthcare coverage needs.
            </p>
            <div className="text-sm text-gray-400">
              © 2024 MediPredict. All rights reserved.
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Home</a></li>
              <li><a href="#predict" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Predict</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">About</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><p className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Help Center</p></li>
              <li><p className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Privacy Policy</p></li>
              <li><p className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Terms of Service</p></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
