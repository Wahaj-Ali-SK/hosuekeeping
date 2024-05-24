import React from 'react'
import Blog from '../Blog/Blog'

const SingleBlogCatSec = () => {
    return (
        <div className='flex flex-col gap-2 sm:flex-row h-[fit-content] justify-between '>
            <div className='h-[250px] md:w-[30%] md:h-[350px]'>
                <Blog />
            </div>

            <div className='h-[250px] md:w-[30%] md:h-[350px]'>
                <Blog />
            </div>

            <div className='h-[250px] md:w-[30%] md:h-[350px]'>
                <Blog />
            </div>


        </div>
    )
}

export default SingleBlogCatSec