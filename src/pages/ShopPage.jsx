import { NavLink, Routes, Route, Outlet } from "react-router-dom";
import { About } from "../components/About.jsx";
import { Blog } from "../components/Blog.jsx";

export const ShopPage = () => {
  return (
    <>
      <nav>
        {/* Ссылки для мобильных устройств скрыты */}
        <NavLink to="/shop/about" className="mr-4 hidden md:inline-block">
          About
        </NavLink>
        <NavLink to="/shop/blog" className="mr-4 hidden md:inline-block">
          Blog
        </NavLink>
      </nav>

      {/* Вставка Outlet для дочерних маршрутов */}
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
      
      <Outlet /> {/* Рендер дочерних компонентов, таких как About или Blog */}
    </>
  );
};
