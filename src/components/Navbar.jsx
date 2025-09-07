import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Complete Scores", path: "/scores" },
    { name: "Media Projects", path: "/media" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-dark fixed top-0 left-0 right-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl"
          onClick={() => setIsOpen(false)}
        >
          Niklas Composer
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6 text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
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

        <ul
          className={`flex flex-col md:flex-row md:space-x-12 items-center 
                      md:static md:opacity-100 md:top-0
                      absolute left-0 w-full md:w-auto bg-dark md:bg-transparent
                      transition-all duration-300 ${
                        isOpen ? "top-16 opacity-100" : "top-[-400px] opacity-0"
                      }`}
        >
          {menuItems.map((item) => (
            <li key={item.name} className="mx-2 my-2 md:my-0">
              <Link
                to={item.path}
                className="block px-4 py-2 rounded hover:bg-accent hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
