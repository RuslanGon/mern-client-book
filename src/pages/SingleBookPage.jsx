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

  if (loading) return <p className="text-center text-gray-700 text-lg">Загрузка...</p>;
  if (error) return <p className="text-center text-red-600 text-lg">{error}</p>;

  return (
    <div className="bg-teal-200 min-h-screen px-4 lg:px-24 py-8">
      <div className="max-w-4xl mx-auto p-8 rounded-lg shadow-2xl bg-opacity-80">
        <div className="flex flex-col items-center">
          <img
            src={book.imageURL}
            alt={book.bookTitle}
            className="w-64 h-96 object-cover rounded-lg shadow-lg mb-8 transition-transform transform hover:scale-105"
          />
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4 text-center">{book.bookTitle}</h2>
          <p className="text-lg text-gray-600 mb-6 italic font-medium">Author: <span className="font-semibold text-blue-600">{book.authorName}</span></p>
          <p className="text-md text-gray-500 mb-6 font-semibold">Category: <span className="text-teal-600">{book.category}</span></p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">{book.bookDescription}</p>
          <a
            href={book.bookPDFUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-black transition duration-300"
          >
            Read the Book
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleBookPage;

