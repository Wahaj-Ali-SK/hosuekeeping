import React from 'react'

const BlogSecHEading = ({blogHeading, headingColor}) => {
    const textColorClass = headingColor ? `${headingColor}` : 'black';
  return (
    <div className='mt-5 mb-10'>
        <h2 className={`border-l-[5px] border-${textColorClass} pl-8 font-bold text-xl md:text-2xl text-${textColorClass}`}>{blogHeading}</h2>
    </div>
  )
}

export default BlogSecHEading