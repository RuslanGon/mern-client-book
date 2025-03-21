import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";

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
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header>
      <nav>
        <div>
          <Link
            className="text-2xl font-bold text-blue-700 flex items-center gap-2"
            to="/" >
            <FaBlog className="inline-block" /> Books
          </Link>
          <ul className="md:flex space-x-12 gap-12 hidden">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link to={path}
                  className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
                >{link}
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-x-12  lg:flex items-center">
            <button><FaBarsStaggered className="w-5 hover:text-blue-700 cursor-pointer hidden" /></button>
          </div>
          <div className="md:hidden">
             <button className="text-black focus:outline-none" onClick={toggleMenu}>{isMenuOpen ? <FaXmark className="h-5 w-5 text-black" /> : <FaBarsStaggered className="h-5 w-5 text-black" />}</button>
          </div>
        </div>
        <div className={`space-y-4 px-4`}>
       { navItems.map(({ link, path }) => (
              <li key={path}>
                <Link to={path}
                  className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
                >{link}
                </Link>
              </li>
            ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
