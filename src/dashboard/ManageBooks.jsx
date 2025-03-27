import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchManageBooks = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/all-books");
        setAllBooks(data);
      } catch (error) {
        console.error("Error loading books:", error);
        setError("Error loading books.");
      } finally {
        setLoading(false);
      }
    };
    fetchManageBooks();
  }, []);

  const handleDelete = async (bookId) => {
    try {
      // Отправка запроса на удаление
      await axios.delete(`http://localhost:5000/delete-book/${bookId}`);
      // Обновление списка книг после удаления
      setAllBooks(allBooks.filter(book => book._id !== bookId));
      alert("Book deleted successfully!");  // Успешное удаление
    } catch (error) {
      console.error("Error deleting book:", error);
      setError("Error deleting book.");
    }
  };

  return (
    <div className="px-4 my-5">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <table className="lg:w-[1000px]">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              No.
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Book Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Author Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Prices
            </th>
            <th className="relative px-6 py-3 text-left"> 
              <span className="text-xs text-gray-500 uppercase">Edit or Manage</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
          {allBooks.map((book, index) => (
            <tr key={book._id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                {index + 1}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                {book.bookTitle}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                {book.authorName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                {book.category}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                ${book.price}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium"> 
                <Link
                  to={`/admin/dashboard/edit-books/${book._id}`}
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </Link>
                <button onClick={() => handleDelete(book._id)} className="bg-sky-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-red-600 cursor-pointer ml-2">Delete</button>
              </td>
           
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBooks;
