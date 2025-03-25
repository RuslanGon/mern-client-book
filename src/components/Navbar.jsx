import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaXmark, FaBlog } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/Shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 transition-all duration-300">
      <nav className={`py-4 px-6 lg:px-24 flex justify-between items-center transition-all duration-300 ${
          isSticky ? "bg-blue-300 shadow-lg text-white" : "bg-transparent"
        }`}>
        <Link
          className="text-2xl font-bold text-blue-700 flex items-center gap-2"
          to="/"
        >
          <FaBlog className="inline-block" /> Books
        </Link>

        <ul className="md:flex space-x-12 hidden">
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <Link
                to={path}
                className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button className="text-black focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaXmark className="h-5 w-5 text-black" />
            ) : (
              <FaBarsStaggered className="h-5 w-5 text-black" />
            )}
          </button>
        </div>
      </nav>

      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-blue-700 shadow-md`}>
        <ul className="space-y-4 px-4 py-2">
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <Link
                to={path}
                className="block text-base text-white uppercase cursor-pointer"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
