'use client'; // This makes the component a Client Component

import React from 'react';

const Footer = () => {
  // Function to handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="text-white p-4 relative">
      <div className="flex flex-row relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-4 flex space-x-4 justify-center">
            <p className="mt-2">
              Email: <a href="mailto:nitishchavan937@example.com" className="text-blue-300">nitishchavan937@example.com</a>
            </p>
            <p className="mt-2">
              LinkedIn: <a href="https://www.linkedin.com/in/nitish-chavan-983635294/" className="text-blue-300">linkedin.com/in/nitish</a>
            </p>
            <p className="mt-2">
              GitHub: <a href="https://github.com/nitish619" className="text-blue-300">github.com/nitish</a>
            </p>
          </div>

          <hr className="border-t border-gray-500 my-4" />
          <p>&copy; 2025 Nitish. All rights reserved.</p>
        </div>

        {/* Scroll to Top Button */}
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex justify-center">
          <button
            onClick={scrollToTop}
            className="p-3 w-12 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
