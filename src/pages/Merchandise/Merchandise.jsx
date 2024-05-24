import React from 'react';
import shirt1 from '../../assets/blueshirt-transformed.webp';
import shirt2 from '../../assets/royal-rainbow.webp'

const Merchandise = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row py-6 md:py-20 bg-white text-black'>
        <div className='md:w-[50vw] px-10 md:px-20'>
          <h1 className='text-[32px] font-[700] leading-[40px]'>Our Famous "Life is Great in the 908" Merchandise is Now Available For Purchase IN-STORE at the Fair Trade Long Beach Retail Center</h1>
          <p className='text-gray-500 my-2'>Shop shirts, mugs, and more in-person by visiting Fair Trade Long Beach… located in Parkview Village at the Corner of Bellflower Blvd. and Carson St.</p>

          <p className='text-gray-500 my-2'>The address is 4105 N Bellflower Blvd Unit B, Long Beach, CA 90808 and they are open Tuesday-Saturday, 11am-7pm and Sunday, 11am-4pm!</p>
        </div>
        <div className='flex flex-col md:flex-row gap-3 items-center'>
          <div className='w-[250px]'>
            <img className='w-full opacity-100 hover:opacity-80 transition-all duration-300 shirt-img' src={shirt1} alt="merchandise 1"/>
          </div>
          <div className='w-[250px]'>
            <img className='w-full opacity-100 hover:opacity-80 transition-all duration-300 shirt-img' src={shirt2} alt="merchandise 1" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Merchandise