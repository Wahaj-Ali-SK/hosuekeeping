import React, { useState } from 'react'
import blogBg from '../../assets/blogBg.webp';

const Blog = () => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='relative w-full h-full'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div class="absolute inset-0 overflow-hidden">
        <img class="object-cover w-full h-full transition-opacity duration-300" style={{ opacity: isHovered ? 0.5 : 0.7 }} src={blogBg} alt="Background Image" />
      </div>
      <div class="flex flex-col justify-between relative z-10 px-8 pb-6 h-full" style={{ boxShadow: '#333333d6 13px -20px 20px 20px inset' }} >
        <h4 className='bg-black text-white uppercase w-fit py-1 px-2 font-bold text-base'>Featured</h4>
        <h2 className='uppercase text-white font-bold text-2xl'>Long Beach Festival of flight</h2>
      </div>
    </div>
  )
}

export default Blog