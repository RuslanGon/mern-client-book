import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import { ShopPage } from "./pages/ShopPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Navbar from "./components/Navbar.jsx";
import { Blog } from "./components/Blog.jsx";
import { About } from "./components/About.jsx";
import "./index.css";
import SingleBookPage from "./pages/SingleBookPage.jsx";
import DashboardLayout from "./dashboard/DashboardLayout.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop/*" element={<ShopPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin/dashboard/*" element={<DashboardLayout />} />
          <Route path="/book/:id" element={<SingleBookPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
