import React from 'react'
import subsBg from '../../assets/subscription.jpg';
import whatIsIt from '../../assets/what-is-it.webp';
import quickFacts from '../../assets/quick facts.webp';

const SubscriptionBox = () => {
  return (
    <>
      <div className='relative '>
        <div className='fixed top-0 left-0 w-screen h-[100%] z-0 bg-black'>
          <img className='w-full h-full mix-blend-normal opacity-60' src={subsBg} alt="Subscription" />
        </div>

        <div className='relative top-[25vh] flex flex-col justify-center items-center'>
          <h2 className='text-[22px] md:text-[52px] leading-[1.2em] md:leading-[56px] mb-4 text-white font-bold w-[80%] md:w-[55%] text-center'>The "life is Great in the 908" Local Subscription Box!</h2>
          <p className='text-white text-[18px] md:text-[22px] leading-[1.2em] md:leading-[28px] w-[60%] text-center'>We work with local merhants to pick out the perfect seasonal items and then buy thenm at a bulk discount and deliver it to your home for FREE!</p>
          <button className='bg-black text-white px-4 py-2 rounded mt-2 hover:bg-white hover:text-black'>See More</button>
        </div>

        <div class='relative top-[50vh] md:top-[60vh] z-10 bg-white'>
          <div className='flex flex-col md:flex-row pt-6 md:pt-20 justify-around px-6 md:px-20'>
            <img className='p-10 md:p-[0]' src={whatIsIt} alt="What is it?" />
            <div className='flex flex-col md:w-[50%] justify-center'>
              <h3 className='text-[32px] font-[600] mb-4'>What is it?</h3>
              <p className='text-[16px] text-gray-500 mb-2'>What is our "Life is Great in the 908" Subscription Box?</p>
              <p className='text-[16px] text-gray-500 mb-2'>It is a quarterly variety box delivered to your doorstep,with all sorts of fun, tasty, and local made/sold goodies!</p>
              <p className='text-[16px] text-gray-500'>It's a WIN-WIN-WIN. If you're looking for an easy, fun way to suppot a variety of local businesses and our magazine, consider signing up for our Subscription Box!</p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row pb-4  pt-4 md:pt-20 justify-between items-center px-6 md:px-20'>
            <div className='flex flex-col md:w-[50%] justify-center'>
              <h3 className='text-[32px] font-[600] mb-4'>SUBSCRIPTION BOX QUICK FACTS</h3>
              <div className='mb-2'>
                <h4>Delivery:</h4>
                <p className='text-[16px] text-gray-500 my-2'>FREE DELIVERY to the cities of Long Beach, Lakewood, Los Al, Rossmoor, and Seal Beach! We currently will not deliver to any other city.</p>
              </div>

              <div className='mb-2'>
                <h4>Inside the Box:</h4>
                <p className='text-[16px] text-gray-500 my-2'>Well, the point of the box is to have it be a surprise. But we can assure you we hand-select a really cool box that can be enjoyed by all. It’s themed for the season and everything in it makes a great gift! </p>
              </div>

              <div className='mb-2'>
                <h4>Deadlines:</h4>
                <ul className='my-2'>
                  <li className='text-gray-500 mb-2'>
                    <div>
                      <h5 className='underline'>Fall Box</h5>
                      <p>Deadline to Sign Up: September 30th</p>
                      <p>Delivery Dates: October 10th-17th</p>
                    </div>
                  </li>
                  <li className='text-gray-500 mb-2'>
                    <div>
                      <h5 className='underline'>Winter Box</h5>
                      <p>Deadline to Sign Up: December 31st</p>
                      <p>Delivery Dates: January 10th-17th</p>
                    </div>
                  </li>
                  <li className='text-gray-500 mb-2'>
                    <div>
                      <h5 className='underline'>Spring Box</h5>
                      <p>Deadline to Sign Up: March 31st</p>
                      <p>Delivery Dates: April 10th-17th</p>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
            <div className='h-[450px]'>
              <img className='h-[100%]' src={quickFacts} alt="Qucik Facts" />
            </div>
          </div>

          <div className='bg-black text-white p-4 md:p-10 flex flex-col items-center md:px-[170px]'>
            <h2 className='text-[32px] font-[600] mb-2'>Price-$70</h2>
            <p className='text-[22px] text-center'>Our Life is Great in the 908 Subscription Box includes 5+ local items worth a retail total of $100+ delivered to your doorstep for just $70(+tax)!</p>
            <button className='bg-white text-black px-4 py-2 rounded mt-2 hover:bg-black hover:text-white hover:border-solid border-2 transition-border duration-700'>Sign Up</button>
          </div>

          <div className='flex flex-col md:flex-row bg-white text-black md:px-20 justify-between items-center py-8'>
            <p className='text-[22px] font-[700] w-[85%] md:w-[45%] tracking-[0.4px]'>If you signed up for a box but would like to cancel, you may do so here at anytime!</p>
            <button className='bg-black text-white border-2 border-solid px-4 py-2 rounded mt-2 hover:bg-white hover:text-black  border-black transition-all duration-700'>Unsubscribe From Box</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default SubscriptionBox