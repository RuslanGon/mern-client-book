import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditBooks = () => {
  const { id } = useParams(); // Получаем ID книги из URL
  const [book, setBook] = useState({
    bookTitle: "",
    authorName: "",
    imageURL: "",
    category: "",
    bookDescription: "",
    bookPDFUrl: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Используем useNavigate вместо useHistory

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`http://localhost:5000/book/${id}`);
        if (!response.ok) throw new Error("Failed to load book data");

        const data = await response.json();
        setBook({
          bookTitle: data.bookTitle || "",
          authorName: data.authorName || "",
          imageURL: data.imageURL || "",
          category: data.category || "",
          bookDescription: data.bookDescription || "",
          bookPDFUrl: data.bookPDFUrl || ""
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/book/${id}`, {
        method: "PATCH", // Используем PATCH для частичного обновления данных
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookTitle: book.bookTitle,
          authorName: book.authorName,
          imageURL: book.imageURL,
          category: book.category,
          bookDescription: book.bookDescription,
          bookPDFUrl: book.bookPDFUrl
        }), // Отправляем данные книги в теле запроса
      });

      if (!response.ok) {
        throw new Error("Failed to update book");
      }

      // Перенаправляем пользователя на страницу книги после успешного обновления
      navigate(`/book/${id}`); // Заменяем history.push на navigate
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="px-4 my-5">
      <h2 className="mb-8 text-3xl font-bold">Update the Book data</h2>
      <form onSubmit={handleSubmit} className="flex lg:w-[900px] flex-col flex-wrap gap-4">
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <label className="mb-2 block font-medium text-gray-700">Book Title</label>
            <input
              type="text"
              name="bookTitle"
              value={book.bookTitle}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div className="lg:w-1/2">
            <label className="mb-2 block font-medium text-gray-700">Author Name</label>
            <input
              type="text"
              name="authorName"
              value={book.authorName}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <label className="mb-2 block font-medium text-gray-700">Book Image URL</label>
            <input
              type="text"
              name="imageURL"
              value={book.imageURL}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div className="lg:w-1/2">
            <label className="mb-2 block font-medium text-gray-700">Book Category</label>
            <input
              type="text"
              name="category"
              value={book.category}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
        </div>
        <div className="lg:w-1/2">
          <label className="mb-2 block font-medium text-gray-700">Book Description</label>
          <textarea
            name="bookDescription"
            value={book.bookDescription}
            onChange={handleChange}
            rows={6}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div className="lg:w-1/2">
          <label className="mb-2 block font-medium text-gray-700">Book PDF URL</label>
          <input
            type="text"
            name="bookPDFUrl"
            value={book.bookPDFUrl}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black cursor-pointer" type="submit">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBooks;
