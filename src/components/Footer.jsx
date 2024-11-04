// src/components/Footer.jsx
import React from 'react';
import { FaTwitter, FaTelegram, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-pink-900 to-red-900/50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-pink-200 mb-6 md:mb-0">
            © 2024 Our Platform. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-pink-200 hover:text-pink-400 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-pink-200 hover:text-pink-400 transition-colors">
              <FaTelegram size={24} />
            </a>
            <a href="#" className="text-pink-200 hover:text-pink-400 transition-colors">
              <FaDiscord size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;