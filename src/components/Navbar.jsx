import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMusic } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Complete Scores", path: "/scores" },
    { name: "Media Projects", path: "/media" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Scroll-Handler
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 50 && currentScroll > lastScroll) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Variants für Framer Motion
  const listVariants = {
    open: {
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
    closed: {},
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-sm shadow-md transition-all duration-300 ${
        isScrolled ? "transform -translate-y-16 opacity-80" : "transform translate-y-0 opacity-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link
          to="/"
          className="text-2xl font-heading flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <FaMusic /> Niklas Composer
        </Link>

        {/* Mobile Menu Button */}
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

        {/* Menu Items */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={listVariants}
              className="flex flex-col items-center absolute top-full left-0 w-full
                        bg-dark/90 backdrop-blur-sm rounded-b-md shadow-lg py-4 space-y-2 md:hidden"
            >
              {menuItems.map((item) => (
                <motion.li key={item.name} variants={itemVariants} className="w-full">
                  <Link
                    to={item.path}
                    className={`block w-full text-center px-4 py-2 rounded font-medium transition-colors ${
                      location.pathname === item.path
                        ? "bg-accent text-dark"
                        : "text-secondary hover:bg-accent hover:text-dark"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>


        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-12 items-center">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`block px-4 py-2 rounded transition-colors font-medium ${
                  location.pathname === item.path
                    ? "bg-accent text-dark"
                    : "hover:bg-accent hover:text-dark text-secondary"
                }`}
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
