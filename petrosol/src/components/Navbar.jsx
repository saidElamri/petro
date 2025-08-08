import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

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
        >
          AZA<span className="text-red-600">Petro</span>
        </Link>
        <div className="flex space-x-10 text-sm font-semibold">
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
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
