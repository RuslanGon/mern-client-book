import axios from "axios";
import { useEffect, useState } from "react";
import BookCards from "../components/BookCards.jsx";

const OtherBooksPage = () => {
  const [books, setBooks] = useState([]);

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
      <BookCards books={books} headline="Other Books" />
    </div>
  );
};

export default OtherBooksPage;
