import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Checkbox } from '@material-tailwind/react'
import Footer from '../../components/Footer/Footer'

const TodayTasks = () => {
  return (
    <>
      <Navbar currentPage="today's-tasks" />
      <div className="flex flex-col py-2 px-8 absolute my-16 w-full inset-0 overflow-auto">
        <h2 className='text-2xl font-[600] text-center my-2'>Scheduled Tasks</h2>

        <div className='flex flex-col mt-2'>
          <h3 className='text-xl font-[600]'>Today's Tasks</h3>
          <div className='flex mt-2 p-2 justify-between border-b-2 border-black'>
            <div className='flex flex-col'>
              <h4 className='text-lg'>Vaccuming Carpets</h4>
              <p className='underline text-lg'>See Notes</p>
            </div>
            <Checkbox defaultChecked />
          </div>

          <div className='flex mt-2 p-2 justify-between border-b-2 border-black'>
            <div className='flex flex-col'>
              <h4 className='text-lg'>Laundry Folding</h4>
              <p className='underline text-lg'>See Notes</p>
            </div>
            <Checkbox defaultChecked />
          </div>

          <div className='flex mt-2 p-2 justify-between border-b-2 border-black'>
            <div className='flex flex-col'>
              <h4 className='text-lg'>Kitchen Deep Cleaning</h4>
              <p className='underline text-lg'>See Notes</p>
            </div>
            <Checkbox defaultChecked />
          </div>
        </div>

        <div className='flex flex-col mt-6'>
        <h3 className='text-xl font-[600]'>This Week's Plan</h3>
        <div className='flex mt-2 p-2 justify-between border-b-2 border-black'>
            <h4 className='text-lg'>Monday</h4>
            <p className='underline'>See Details</p>
        </div>
        <div className='flex mt-2 p-2 justify-between border-b-2 border-black'>
            <h4 className='text-lg'>Tuesday</h4>
            <p className='underline'>See Details</p>
        </div>
        <div className='flex mt-2 p-2 justify-between border-b-2 border-black'>
            <h4 className='text-lg'>Wednesday</h4>
            <p className='underline'>See Details</p>
        </div>
        <div className='flex mt-2 p-2 justify-between border-b-2 border-black'>
            <h4 className='text-lg'>Thursday</h4>
            <p className='underline'>See Details</p>
        </div>
        <div className='flex mt-2 p-2 justify-between border-b-2 border-black'>
            <h4 className='text-lg'>Friday</h4>
            <p className='underline'>See Details</p>
        </div>
        <div className='flex mt-2 p-2 justify-between border-b-2 border-black'>
            <h4 className='text-lg'>Saturday</h4>
            <p className='underline'>See Details</p>
        </div>
        <div className='flex mt-2 p-2 justify-between border-b-2 border-black'>
            <h4 className='text-lg'>Sunday</h4>
            <p className='underline'>See Details</p>
        </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TodayTasks