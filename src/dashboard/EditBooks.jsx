import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditBooks = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`http://localhost:5000/book/${id}`);
        if (!response.ok) throw new Error("Failed to load book data");

        const data = await response.json();
        setBook(data);
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

  return (
    <div className="px-4 my-5">
      <h2 className="mb-8 text-3xl font-bold">Edit Book</h2>
      {book ? (
        <form className="flex lg:w-[900px] flex-col flex-wrap gap-4">
          <div className="flex gap-8">
            <div className="lg:w-1/2">
              <label className="mb-2 block font-medium text-gray-700">Book Title</label>
              <input
                type="text"
                defaultValue={book.title}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="lg:w-1/2">
              <label className="mb-2 block font-medium text-gray-700">Author Name</label>
              <input
                type="text"
                defaultValue={book.author}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
          </div>
          <div className="flex gap-8">
            <div className="lg:w-1/2">
              <label className="mb-2 block font-medium text-gray-700">Book Image URL</label>
              <input
                type="text"
                defaultValue={book.imageURL}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="lg:w-1/2">
              <label className="mb-2 block font-medium text-gray-700">Book Category</label>
              <input
                type="text"
                defaultValue={book.category}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <label className="mb-2 block font-medium text-gray-700">Book Description</label>
            <textarea
              defaultValue={book.description}
              rows={6}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div className="lg:w-1/2">
            <label className="mb-2 block font-medium text-gray-700">Book PDF URL</label>
            <input
              type="text"
              defaultValue={book.bookPDFUrl}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black cursor-pointer" type="submit">
              Save Changes
            </button>
          </div>
        </form>
      ) : (
        <p>Book not found</p>
      )}
    </div>
  );
};

export default EditBooks;