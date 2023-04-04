import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
          <img src='https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg' alt='logo' className='h-16 w-16' />
            <input type="text" className="ml-4 p-2 rounded-lg border border-gray-400 focus:outline-none" placeholder="Search" />
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" className="whitespace-nowrap text-gray-600 hover:text-gray-800 mx-4">Home</a>
            <a href="#" className="whitespace-nowrap text-gray-600 hover:text-gray-800 mx-4">Partners</a>
            <a href="#" className="whitespace-nowrap text-gray-600 hover:text-gray-800 mx-4">Digital Assests</a>
            <a href="#" className="whitespace-nowrap text-gray-600 hover:text-gray-800 mx-4">Settings</a>
          </div>
          <div className="md:hidden flex items-center justify-center">
            <button type="button" className="bg-gray-800 text-gray-200 inline-flex items-center justify-center p-2 rounded-md focus:outline-none" aria-controls="mobile-menu" aria-expanded="false" onClick={toggleMobileMenu}>
                <span className="sr-only">Open main menu</span>
                <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="whitespace-nowrap text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#" className="whitespace-nowrap text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Partners</a>
          <a href="#" className="whitespace-nowrap text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Digital Assests</a>
          <a href="#" className="whitespace-nowrap text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Settings</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
