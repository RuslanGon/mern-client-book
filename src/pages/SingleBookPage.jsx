import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleBookPage = () => {
  const { id } = useParams();
  console.log(id);
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
    <div className="mt-28 px-4 lg:px-24">
      {/* <h2>{book.bookTitle}</h2>
      <img src={book.imageURL} alt={book.bookTitle} />
      <p>{book.bookDescription}</p> */}
      <img src={book.imageURL} alt={book.bookTitle} className="h-98" />
      <h2>{book.bookTitle}</h2>
    </div>
  );
};

export default SingleBookPage;
