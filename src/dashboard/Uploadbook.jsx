const UploadBook = () => {
  return (
    <div className="px-4 my-5">
      <h2 className="mbb-8 text-3xl font-bold">Upload a Book</h2>
      <form className="flex lg:w-[900px] flex-col flex-wrap gap-4">
        <div className="lg:w-1/2">
          <label
            htmlFor="bookTitle"
            value='Book Title'
            className="mb-2 block font-medium text-gray-700 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="bookTitle"
            id="bookTitle"
            name="bookTitle"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@example.com"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default UploadBook;
