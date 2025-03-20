import { NavLink, Route, Routes } from "react-router-dom";
import { About } from "../components/About.jsx";
import { Blog } from "../components/Blog.jsx";

export const ShopPage = () => {
  return (
    <>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/blog">Blog</NavLink>

      <Routes>
        <Route path="/about/*" element={<About />} />
        <Route path="/blog/*" element={<Blog />} />
      </Routes>
    </>
  );
};
