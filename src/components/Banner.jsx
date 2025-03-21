import React from 'react'

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-200 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        <div>
          <h2 className="text-5xl font-bold leading-snug text-black">
            Buy and Sell Your Books
          </h2>
          <p>
            {" "}
            Discover new horizons with your favorite books! Buy rare editions,
            sell pre-loved books, and share knowledge with others. Build your
            perfect book collection today!
          </p>
          <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a book"
              className="px-2 py-2 w-64 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button className='bg-teal-500 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded-lg'>Search</button>
          </div>
        </div>
        <div>right side</div>
      </div>
    </div>
  );
}

export default Banner