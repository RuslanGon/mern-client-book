import axios from "axios";
import { useEffect, useState } from "react";

export const ShopPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooksShop = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/all-books");
        setBooks(data);
      } catch (error) {
        console.error("Ошибка при загрузке книг:", error);
        setError("Не удалось загрузить книги. Попробуйте позже.");
      } finally {
        setLoading(false);
      }
    };
    fetchBooksShop();
  }, []);

  return (
    <div className="px-4 lg:px-24 bg-teal-200">
      <h2 className="text-5xl font-bold text-center mb-10 pt-10">All Books are here</h2>

      {loading && <p className="text-center text-lg">Загрузка...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {!loading && !error && (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6">
          {books.map((book) => (
            <div
              key={book.bookTitle}
              className="border rounded-lg shadow-md p-4 flex flex-col items-center"
            >
              <img
                src={book.imageURL}
                alt={book.bookTitle}
                className="w-full h-80 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold">{book.bookTitle}</h3>
              <p className="text-gray-600">by {book.authorName}</p>
              <p className="text-sm text-gray-500">{book.category}</p>
              <p
                className="text-gray-700 mt-2 text-sm text-center line-clamp-4"
                title={book.bookDescription}
              >
                {book.bookDescription}
              </p>
              <button className="bg-blue-700 mt-4 px-16 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded-lg cursor-pointer">Buy now</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
