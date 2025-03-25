import Banner from "../components/Banner.jsx";
import BestSellerPage from "./BestSellerPage.jsx";
import FavBook from "./FavBook.jsx";
import OtherBooksPage from "./OtherBooksPage.jsx";
import PromoBanner from "./PromoBanner.jsx";

const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <BestSellerPage />
      <FavBook />
      <PromoBanner />
      <OtherBooksPage />
    </div>
  );
};

export default HomePage;
