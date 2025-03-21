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
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
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
