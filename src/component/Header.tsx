'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navBar } from '@/data';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={` text-white p-4 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-primary" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href='/'
          className='flex items-center gap-2'
        >
          <img src="/logo.png" alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Nitish 
          </p>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            {navBar.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className='hover:text-gray-200'>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden absolute top-14 w-[30%] right-0 bg-gradient-to-r from-slate-600 to-black shadow-md mt-1 mr-5 rounded-lg">
          <ul className="flex flex-col items-left space-y-4 px-4 py-2">
            {navBar.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:text-gray-200" onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
