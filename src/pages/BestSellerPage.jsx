import { useEffect, useState} from "react"
import BookCards from "../components/BookCards.jsx"
import axios from "axios";

const BestSellerPage = () => {
  const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/all-books")
  //     .then((res) => res.json())
  //     .then((data) => setBooks(data));
  // }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/all-books");
        setBooks(data);
      } catch (error) {
        console.error("Ошибка при загрузке книг:", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <BookCards books={books} headline='Best Seller Books' />
    </div>
  );
}

export default BestSellerPage