import React, { useState } from 'react'
import sideblogImg from '../../assets/side blog.webp';
import { IoMdTime } from "react-icons/io";

const SideBlog = () => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className='relative w-full h-[350px]'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <div class="absolute inset-0 overflow-hidden">
          <img class="object-cover w-full h-full transition-transform duration-700" style={{ transform: isHovered ? 'scale(1.2)' : 'scale(1)' }} src={sideblogImg} alt="Background Image" />
        </div>

        <div class="flex flex-col relative z-10 px-8 md:pb-6 h-[350px]">
          <h4 className='bg-black text-white uppercase w-fit py-1 px-2 font-bold text-base'>Featured</h4>
        </div>
      </div>
      <div className='mt-4'>
        <h2 className='uppercase text-black text-xl font-medium'>Hope can't wait and hope is here</h2>
      </div>

      <div className='flex mt-4 items-center gap-2'>
        <IoMdTime size={25} />
        <p className='font-bold text-xl'>January 3, 2024</p>
      </div>
    </>
  )
}

export default SideBlog