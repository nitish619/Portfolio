import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-slate-700 text-white p-4 fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Nitish&#39;s Portfolio</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-200">Home</Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-gray-200">About</Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-gray-200">Projects</Link>
            </li>
            <li>
              <Link href="#skills" className="hover:text-gray-200">Skills</Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-gray-200">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
