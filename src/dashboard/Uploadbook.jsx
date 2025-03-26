
const UploadBook = () => {

const bookCategories = [
  "Fiction",
  "Non-Fiction",
  "Mistery",
  "Programming",
  "Sience fiction",
  "Fantasy",
  "Horror",
  "Autobiography",
  "Romance",
  "Biography"
]   

  return (
    <div className="px-4 my-5">
      <h2 className="mbb-8 text-3xl font-bold mb-6">Upload a Book</h2>
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
              Author name
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
              Book image url
            </label>
            <input
              type="text"
              id="imageURL"
              name="imageURL"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Book image url"
              required
            />
          </div>
          <div className="lg:w-1/2">
            <label
              htmlFor="category"
              className="mb-2 block font-medium text-gray-700 dark:text-gray-300"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Category"
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UploadBook;
