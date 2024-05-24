import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.webp';

const Footer = () => {
  return (
    <div className='p-3 lg:px-[150px] flex flex-col bg-black justify-center items-center text-white'>
      <div className='p-6 flex flex-col items-center border-b-2 w-full'>
        <Link to="/" className='flex m-4'>
          <img className='object-over max-w-[250px]' src={logo} alt="Lb908" />
        </Link>

        <ul id='nav-menu' className="hidden md:flex justify-between lg:w-[80%] mt-6">
          <li><Link to="/" className='uppercase text-white font-medium text-lg m-3 p-3 hover:text-green-600'>Home</Link></li>
          <li><Link to="/our-subscription-box" className='uppercase text-white font-medium text-lg m-3 p-3 hover:text-green-600'>Our Subscription</Link></li>
          <li><Link to="/the-magazine" className='uppercase text-white font-medium text-lg m-3 p-3 hover:text-green-600'>The Magzine</Link></li>
          <li><Link to="/merchandise" className='uppercase text-white font-medium text-lg m-3 p-3 hover:text-green-600'>Merchandise</Link></li>
        </ul>
      </div>

      <div className='flex justify-between w-full px-2'>
        <div className='my-2'>
          <p className='font-bold md:text-l my-2'>©  LB 908, 2024</p>
          <p className='md:text-l text-gray-500'>All Rights Reserve</p>
        </div>

        <div className='my-2 text-right'>
          <p className='uppercase font-bold md:text-l my-2'>For Disclaimer</p>
          <Link className='md:text-l text-gray-500'>Disclaimer</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer