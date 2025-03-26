
import axios from "axios";
import { useEffect, useState } from "react";

export const ShopPage = () => {

const [books, setBooks] = useState([])


useEffect(() => {
  const fetchBooksShop = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/all-books");
      setBooks(data);
    } catch (error) {
      console.error("Ошибка при загрузке книг:", error);
    }
  };
  fetchBooksShop();
}, []);

  return (
   <div className="mt-28 px-4 lg:px-24">
    <h2>All Books are here</h2>

   </div>
  );
};
