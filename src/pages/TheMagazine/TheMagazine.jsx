import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import mag1 from '../../assets/mag1.webp';
import mag2 from '../../assets/mag2.webp';
import mag3 from '../../assets/mag3.webp';
import img from '../../assets/one section bg.webp'
import popup from '../../assets/popup.webp';
import { IoClose } from "react-icons/io5";

const TheMagazine = () => {

  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);


  const handleMouseEnter = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  const handleMouseLeave = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const top = containerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsInView(top < windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const images = [
    mag1,
    mag2,
    mag3,
    mag1,
    mag2,
    mag3
  ];

  const [hoverStates, setHoverStates] = useState(Array(images.length).fill(false));

  const [showPopup, setShowPopup] = useState(false);

  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  // UseEffect hook to show the popup when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg w-full md:w-[fit-content]">

            <div className='flex md:w-[50vw]'>
              <div className='hidden md:flex w-[900px]'>
                <img className='h-full w-full' src={popup} alt="popup" />
              </div>
              <div className='flex flex-col p-4 items-center'>
                <div className='flex items-center justify-around w-full  mb-3'>
                  <h3 className='text-center font-[700] text-[22px]'>The Life is Great in the 908 Subscription Box!</h3>
                  <button onClick={closePopup} className=""><IoClose size={25} /></button>
                </div>

                <p className='text-center font-[500] text-sm mb-2'>We deliver a surprise box full of $100+ local items for just $70+ tax to your doorstep. A great way to support local businesses and find new ones you might love!</p>
                <form action="submit" className='w-full flex flex-col items-center'>
                  <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor="email">Email Address:</label>
                    <input className='border-2 ' type="email" />
                  </div>

                  <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor="email">Shipping Address:</label>
                    <textarea className='border-2' name="address" rows="4" cols="50" />
                  </div>

                  <button className='bg-black text-white px-4 py-2 border-black border-2 rounded mt-2 transition-all duration-700 hover:bg-white hover:text-black'>Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='relative h-[90vh] bg-slate-700'>
        <img className='h-full w-full opacity-40' src={img} alt="The Magzine" />
        <div className='absolute top-[25%] md:top-[5%] w-full '>
          <div className='flex flex-col w-full items-center text-white'>
            <h2 className='text-[32px] font-[700] mb-2'>Current Issue</h2>
            <h3 className='uppercase text-[22px] font-[500] mb-3'>The Holiday Issue 2023</h3>
            <img className='w-[220px]' src={mag2} alt="Current Issue" />
            <button className='bg-white text-black px-4 py-2 rounded mt-2 transition-all duration-700 hover:bg-black hover:text-white'>Download</button>
          </div>
        </div>
      </div>

      <div className='bg-white text-black flex flex-col p-6 md:px-20 py-6 md:py-10 items-center'>
        <h3 className='text-[24px] font-[400] text-center md:w-[70%]'>Our print magazine is delivered to 25,000 homes in Long Beach, five times a year! Want to join the community? Subscribe below at $5/issue</h3>
        <button className='bg-black text-white px-4 py-2 rounded mt-2 border-black border-2 transition-all duration-500 hover:bg-white hover:text-black'>Subscribe</button>
      </div>

      <div className='bg-zinc-200 py-8 px-4 md:px-20'>
        <div className='my-2'>
          <h2 className='text-[28px] font-[700]'>View Our Past Magazines:</h2>
          <p className='text-gray-500'>Clcik the Magazine Cover to Download a PDF file.</p>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap items-center gap-6 hover:cursor-pointer" ref={containerRef}>
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative h-[350px] md:w-[22.33%] overflow-hidden"
              initial={{ scale: 0 }}
              animate={{ scale: isInView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <img className='w-full h-full transition-all duration-300' src={image} style={{ transform: hoverStates[index] ? 'scale(1.1)' : 'scale(1.0)' }} alt={`Image ${index}`} />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-700 hover:opacity-100">
                <p className="text-white text-center">Magazine Name</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default TheMagazine