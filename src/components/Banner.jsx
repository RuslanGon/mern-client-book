import React from 'react'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-200 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            <div>
                <h2 className='text-5xl font-bold leading-snug'>Buy and Sell Your Books</h2>
            </div>
            <div>right side</div>
        </div>
    </div>
  )
}

export default Banner