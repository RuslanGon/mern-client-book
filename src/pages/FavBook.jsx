import React from 'react'
import Favbook from '../assets/Favbook.jpg'
import { Link } from 'react-router-dom';

const FavBook = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="md:w-1/2">
        <img src={Favbook} alt="foto" className="rounded md:w-10/12" />
      </div>
      <div className="md:w-1/2 space-y-6 flex flex-col justify-between h-auto max-h-[500px] overflow-hidden">
        <div>
          <h2 className='text-4xl font-bold my-4 md:w-3/4 leading-snug'>
            Find Your <span className='text-blue-700'>Book Here!</span>
          </h2>
          <p className='mb-6 text-lg md:w-5/6'>
            Find Your Book Here! Explore a vast collection of books across all genres and uncover hidden literary gems. Whether you're searching for a thrilling novel, an inspiring biography, or a timeless classic, your next great read is just a click away!
          </p>
          <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-8'>
            <div>
              <h3 className='text-2xl font-bold'>800+</h3>
              <p className='text-base'>Book Listing</p>
            </div>
            <div>
              <h3 className='text-2xl font-bold'>550+</h3>
              <p className='text-base'>Register Users</p>
            </div>
            <div>
              <h3 className='text-2xl font-bold'>770+</h3>
              <p className='text-base'>PDF Downloads</p>
            </div>
          </div>
        </div>
        <div className="mt-auto">
          <Link to='/shop'>
            <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300 w-full md:w-auto cursor-pointer'>
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FavBook;
