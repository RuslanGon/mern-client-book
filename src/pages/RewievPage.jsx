import {FaStar} from 'react-icons/fa6'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const RewievPage = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
        <h2 className="text-5xl font-bold text-center mb-10 leading-snug">Our Customers</h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <div>
                    <p>I'm absolutely thrilled with these books! Each one was captivating and left an unforgettable impression. I especially enjoyed the bestsellers — they not only grab your attention from the first pages but also make you think.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <div>
                    <p>These books have been a true discovery for me! The gripping plot, deep characters, and unexpected twists make it impossible to put them down. Every page keeps you engaged, making you feel as if you're living the story alongside the characters.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <div>
                    <p>I've been reading books from this publisher for a long time, and they never disappoint. Each book is not only beautifully designed but also packed with engaging stories that stay with you long after you finish reading. </p>
                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
    </div>
    
  )
}

export default RewievPage