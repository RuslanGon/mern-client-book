import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import { ShopPage } from "./pages/ShopPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import "./index.css";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <nav className="hidden md:flex">
          {/* Навигация для больших экранов */}
          <NavLink to="/" className="mr-4">Home</NavLink>
          <NavLink to="/shop" className="mr-4">Shop</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop/*" element={<ShopPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
