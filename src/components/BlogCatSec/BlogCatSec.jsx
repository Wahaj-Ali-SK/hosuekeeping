import React from 'react'
import Blog from '../Blog/Blog'
import SideBlog from '../SideBlog/SideBlog'
import BlogSecHEading from '../BlogSecHeading/BlogSecHEading'

const BlogCatSec = () => {
  return (
    <div className='flex flex-col justify-between md:flex-row'>
      <div className='flex flex-col md:w-[22%]'>
        <BlogSecHEading blogHeading='Non-Profit'/>
        <div >
          <SideBlog />
        </div>
      </div>

      <div className='flex flex-col md:w-[50%] gap-5'>
      <BlogSecHEading blogHeading='Music, Arts, & Entertainment'/>
        <div className='h-[500px]'>
          <Blog />
        </div>

        <div className='h-[500px]'>
          <Blog />
        </div>
      </div>

      <div className='flex flex-col md:w-[22%]'>
      <BlogSecHEading blogHeading='Youth Activities'/>
        <div >
          <SideBlog />
        </div>

        <div >
          <SideBlog />
        </div>
      </div>
    </div>
  )
}

export default BlogCatSec