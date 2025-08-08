import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/solutions", label: "Solutions" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white border-b-4 border-red-600 fixed top-0 w-full shadow-sm z-50">
      <div className="container-custom flex justify-between items-center h-16 px-6">
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-widest text-gray-900 hover:text-red-600 transition"
          onClick={() => setIsOpen(false)}
        >
          AZA<span className="text-red-600">Petro</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-sm font-semibold">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`transition ${
                location.pathname === to
                  ? "text-red-600 border-b-2 border-red-600 pb-1"
                  : "text-gray-700 hover:text-red-600"
              }`}
              aria-current={location.pathname === to ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6 text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              // Close icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-red-600">
          <div className="flex flex-col px-6 py-4 space-y-3 font-semibold text-sm">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`transition ${
                  location.pathname === to
                    ? "text-red-600 border-l-4 border-red-600 pl-2"
                    : "text-gray-700 hover:text-red-600"
                }`}
                aria-current={location.pathname === to ? "page" : undefined}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
