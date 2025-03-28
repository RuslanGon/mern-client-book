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
        setError("error");
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return <p className="text-center text-gray-700 text-lg">Загрузка...</p>;
  if (error) return <p className="text-center text-red-600 text-lg">{error}</p>;

  return (
    <div className="mt-28 px-4 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <img
            src={book.imageURL}
            alt={book.bookTitle}
            className="w-64 h-96 object-cover rounded-lg shadow-md mb-6"
          />
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">{book.bookTitle}</h2>
          <p className="text-lg text-gray-600 mb-6">{book.authorName}</p>
          <p className="text-md text-gray-500 mb-4">{book.category}</p>
          <p className="text-lg text-gray-700 mb-6">{book.bookDescription}</p>
          <a
            href={book.bookPDFUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-800 transition duration-300"
          >
            Read the Book
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleBookPage;
