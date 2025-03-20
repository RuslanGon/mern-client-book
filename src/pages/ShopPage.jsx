import { NavLink, Route, Routes, Outlet } from "react-router-dom";
import { About } from "../components/About.jsx";
import { Blog } from "../components/Blog.jsx";

export const ShopPage = () => {
  return (
    <>
      <nav>
        <NavLink to="/shop/about">About</NavLink>
        <NavLink to="/shop/blog">Blog</NavLink>
      </nav>

      <Routes>
        {/* Маршруты для дочерних компонентов */}
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
      </Routes>


      <Outlet />
    </>
  );
};
