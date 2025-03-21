import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    window.addEventListener('scroll', handleScroll)
    return () => {
    window.addEventListener('scroll', handleScroll) 
    }
  }, []);

 const navItems = [
    {Link: 'Home', path: '/'},
    {Link: 'About', path: '/about'},
    {Link: 'Shop', path: '/shop'},
    {Link: 'Sell Your book', path: '/admin/dashboard'},
    {Link: 'Blog', path: '/blog'},
 ] 

  return <div>Navbar</div>;
};

export default Navbar;
