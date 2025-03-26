import { useState } from "react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Autobiography",
    "Romance",
    "Biography",
    "History"
  ];   

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleSelectedBook = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  return (
    <div className="px-4 my-5">
      <h2 className="mb-8 text-3xl font-bold">Upload a Book</h2>
      <form className="flex lg:w-[900px] flex-col flex-wrap gap-4">
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <label
              htmlFor="bookTitle"
              className="mb-2 block font-medium text-gray-700 dark:text-gray-300"
            >
              Book Title
            </label>
            <input
              type="text"
              id="bookTitle"
              name="bookTitle"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Book name"
              required
            />
          </div>
          <div className="lg:w-1/2">
            <label
              htmlFor="authorName"
              className="mb-2 block font-medium text-gray-700 dark:text-gray-300"
            >
              Author Name
            </label>
            <input
              type="text"
              id="authorName"
              name="authorName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Author name"
              required
            />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <label
              htmlFor="imageURL"
              className="mb-2 block font-medium text-gray-700 dark:text-gray-300"
            >
              Book Image URL
            </label>
            <input
              type="text"
              id="imageURL"
              name="imageURL"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Book image URL"
              required
            />
          </div>
          <div className="lg:w-1/2">
            <label
              htmlFor="inputState"
              className="mb-2 block font-medium text-gray-700 dark:text-gray-300"
            >
              Book Category
            </label>
            <select
              id="inputState"
              name="categoryName"
              value={selectedBookCategory}
              onChange={handleSelectedBook}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="lg:w-1/2">
            <label
              htmlFor="bookDescription"
              className="mb-2 block font-medium text-gray-700 dark:text-gray-300"
            >
              Book description
            </label>
               <textarea
        id="bookDescription"
        name="bookDescription"
        placeholder="Write your book description..."
        required
        rows={6}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
          </div>
          
      </form>
    </div>
  );
};

export default UploadBook;
