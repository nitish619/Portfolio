'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-slate-700 text-white p-4 fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Nitish Chavan</h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-gray-200">Home</Link></li>
            <li><Link href="#about" className="hover:text-gray-200">About</Link></li>
            <li><Link href="#projects" className="hover:text-gray-200">Projects</Link></li>
            <li><Link href="#skills" className="hover:text-gray-200">Skills</Link></li>
            <li><Link href="#contact" className="hover:text-gray-200">Contact</Link></li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-slate-700 shadow-md">
          <ul className="flex flex-col items-left space-y-4 py-4 pl-4">
            <li><Link href="/" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="#about" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="#projects" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link href="#skills" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Skills</Link></li>
            <li><Link href="#contact" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
