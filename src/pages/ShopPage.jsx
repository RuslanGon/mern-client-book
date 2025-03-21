import { NavLink, Routes, Route, Outlet } from "react-router-dom";
import { About } from "../components/About.jsx";
import { Blog } from "../components/Blog.jsx";

export const ShopPage = () => {
  return (
    <>
      <nav>
        <NavLink to="/shop/about" className="mr-4 hidden md:inline-block">
          About
        </NavLink>
        <NavLink to="/shop/blog" className="mr-4 hidden md:inline-block">
          Blog
        </NavLink>
      </nav>

      <Routes>
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
      
      <Outlet /> 
    </>
  );
};
