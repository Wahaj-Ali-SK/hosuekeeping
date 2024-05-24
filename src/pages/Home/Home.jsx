import React from 'react'
import HomeHero from '../../components/HomeHero/HomeHero'
import BlogCatSec from '../../components/BlogCatSec/BlogCatSec'
import SingleBlogCatSec from '../../components/SingleBlogCatSec/SingleBlogCatSec'
import singleSecBg from '../../assets/one section bg.webp'
import BlogSecHEading from '../../components/BlogSecHeading/BlogSecHEading'

const Home = () => {
  return (
    <>
      <div className='bg-black h-auto py-2 px-7 md:py-4 md:px-20'>
        <HomeHero />
      </div>

      <div className='bg-white h-auto py-2 px-7 md:py-4 md:px-20'>
        <BlogCatSec />
      </div>

      <div className='relative'>
        <div class="absolute inset-0 overflow-hidden bg-slate-800 ">
          <img class="object-cover w-full mix-blend-multiply" src={singleSecBg} alt="Background Image" />
        </div>
        <div className='relative py-2 px-7 md:py-6 md:px-20'>
          <BlogSecHEading blogHeading='Non-Profit' headingColor="white" />
          <SingleBlogCatSec />
        </div>
      </div>

      <div className='bg-white h-auto py-2 px-7 md:py-4 md:px-20'>
        <BlogCatSec />
      </div>

      <div className='relative'>
        <div class="absolute inset-0 overflow-hidden bg-slate-800 ">
          <img class="object-cover w-full mix-blend-multiply" src={singleSecBg} alt="Background Image" />
        </div>
        <div className='relative py-2 px-7 md:py-6 md:px-20'>
          <BlogSecHEading blogHeading='Non-Profit' headingColor="white" />
          <SingleBlogCatSec />
        </div>
      </div>

      <div className='bg-white h-auto py-2 px-7 md:py-4 md:px-20'>
        <BlogCatSec />
      </div>

      <div className='relative'>
        <div class="absolute inset-0 overflow-hidden bg-slate-800 ">
          <img class="object-cover w-full mix-blend-multiply" src={singleSecBg} alt="Background Image" />
        </div>
        <div className='relative py-2 px-7 md:py-6 md:px-20'>
          <BlogSecHEading blogHeading='Non-Profit' headingColor="white" />
          <SingleBlogCatSec />
        </div>
      </div>

      <div className='bg-white h-auto py-2 px-7 md:py-4 md:px-20'>
        <BlogCatSec />
      </div>

      <div className='relative'>
        <div class="absolute inset-0 overflow-hidden bg-slate-800 ">
          <img class="object-cover w-full mix-blend-multiply" src={singleSecBg} alt="Background Image" />
        </div>
        <div className='relative py-2 px-7 md:py-6 md:px-20'>
          <BlogSecHEading blogHeading='Non-Profit' headingColor="white" />
          <SingleBlogCatSec />
        </div>
      </div>
    </>
  )
}

export default Home