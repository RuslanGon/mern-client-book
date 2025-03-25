import React from 'react'
import { Link } from 'react-router-dom'
import { FaBlog } from "react-icons/fa6";
import Insta from '../assets/insta.png'
import Fice from '../assets/fice.png'
import Teleg from '../assets/teleg.png'

const Footer = () => {
  return (
    <footer className='bg-blue-300 h-24 flex justify-between items-center px-24'>
      <Link
        className="text-2xl font-bold text-blue-700 flex items-center gap-2"
        to="/"
      >
        <FaBlog className="inline-block" /> Books
      </Link>
      <div className='flex gap-8'>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src={Insta} alt="Instagram" className='w-7 h-7' />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src={Fice} alt="Facebook" className='w-7 h-7' />
        </a>
        <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
          <img src={Teleg} alt="Telegram" className='w-7 h-7' />
        </a>
      </div>
    </footer>
  )
}

export default Footer
