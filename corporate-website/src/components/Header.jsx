import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation links
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-purple-700 to-blue-700 shadow-lg backdrop-blur-md bg-opacity-80">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-white tracking-wide">
          Consulting<span className="text-yellow-400">Co.</span>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-white text-lg font-medium relative transition duration-300 hover:text-yellow-400 ${
                location.pathname === link.path ? "text-yellow-400" : ""
              }`}
            >
              {link.label}
              {location.pathname === link.path && (
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 rounded-full"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation (Dropdown) */}
      {menuOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md rounded-b-lg p-4">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block text-lg font-medium text-gray-800 transition duration-300 ${
                    location.pathname === link.path ? "text-purple-700" : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
