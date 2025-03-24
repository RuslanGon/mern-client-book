import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleBookPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/book/${id}`);
        setBook(response.data);
      } catch (error) {
        console.log(error);
        setError("Ошибка загрузки книги");
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>{book.bookTitle}</h2>
      <img src={book.imageURL} alt={book.bookTitle} />
      <p>{book.bookDescription}</p>
    </div>
  );
};

export default SingleBookPage;
