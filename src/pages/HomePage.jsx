import Banner from "../components/Banner.jsx";
import BestSellerPage from "./BestSellerPage.jsx";
import FavBook from "./FavBook.jsx";
import Footer from "./Footer.jsx";
import OtherBooksPage from "./OtherBooksPage.jsx";
import PromoBanner from "./PromoBanner.jsx";
import RewievPage from "./RewievPage.jsx";

const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <BestSellerPage />
      <FavBook />
      <PromoBanner />
      <OtherBooksPage />
      <RewievPage />
      <Footer />
    </div>
  );
};

export default HomePage;
