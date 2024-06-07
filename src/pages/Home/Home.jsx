import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { TiTick } from "react-icons/ti";
import taskbg from '../../assets/images/task bg.jpg'
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userDetails } from '../../Store/UserSlicer';

const getCurrentDayIndex = () => {
  const currentDate = new Date();
  return currentDate.getDay();
};

const Home = () => {

  const user = useSelector(state => state.user.user.user);
  const userRole = useSelector(state => state.user.userRole);
  const condoTasks = useSelector(state => state.user.userTasks);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const dispatch = useDispatch();
  console.log(condoTasks, 'condo tasks');

  useEffect(() => {
    const currentDayIndex = getCurrentDayIndex();
    console.log(currentDayIndex, 'current date');

    const filtered = condoTasks.filter(task => {
      const { schedule } = task;

      if (schedule) {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDay = daysOfWeek[currentDayIndex];

        if (schedule[currentDay] !== undefined) {
          return schedule[currentDay];
        }
      }

      return false;
    });

    setFilteredTasks(filtered);
  }, [condoTasks]);

  useEffect(() => {
    dispatch(userDetails());
  }, []);

  return (
    <>
      <Navbar currentPage="home" />
      <div className='bg-gradient-to-r from-[#858b8f] to-[#000000] w-full h-[100px] absolute mt-16 px-4 flex justify-center items-center text-center'>
        <h2 className='text-2xl mt-2 font-[600] text-gray-200'>Welcome back, <span className='text-[#ffe4c4]'>{user.username}</span></h2>
      </div>
      <div className='flex flex-col py-2 px-8 absolute mt-[180px] w-full'>

        <div>
          <div className='flex justify-between items-center bg-button text-white p-3 rounded-md w-full mt-2 font-[600] text-lg'>See Past Schedules <FaAngleRight /> </div>
        </div>

        <div className='mt-4'>
          <div className='flex justify-between mb-2'>
            <h3 className='text-lg font-[500] '>Today's tasks</h3>
            <Link className='underline' to="/scheduled-tasks">See All</Link>
          </div>

          <Swiper
            spaceBetween={10}
            slidesPerView={2}
            modules={[Scrollbar]}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className='h-[150px]'
          >
            {/* <SwiperSlide>
              <div className='flex relative h-[120px]  bg-gray-800'>
                <img className='absolute h-full w-full  opacity-70 ' src={taskbg} alt="" />
                <div className='relative h-[fit-content] top-[50%] pl-2'>
                  <h3 className='text-white font-[600] w-[90%]'>Kitechen cleaning</h3>
                </div>
                {
                  taskCompleted && <div className='relative right-1 top-1 h-[fit-content]'>
                    <TiTick size={28} color='lightseagreen' />
                  </div>
                }

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex relative h-[120px] bg-gray-800'>
                <img className='absolute h-full w-full  opacity-70' src={taskbg} alt="" />
                <div className='relative h-[fit-content] top-[50%] pl-2'>
                  <h3 className='text-white font-[600] w-[90%]'>Living Room Dusting</h3>
                </div>
                <div className='relative right-1 top-1 h-[fit-content]'>
                  <TiTick size={28} color='lightseagreen' />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex relative h-[120px] bg-gray-800'>
                <img className='absolute h-full w-full  opacity-70' src={taskbg} alt="" />
                <div className='relative h-[fit-content] top-[50%] pl-2'>
                  <h3 className='text-white font-[600] w-[90%]'>Living Room Dusting</h3>
                </div>
                <div className='relative right-1 top-1 h-[fit-content]'>
                  <TiTick size={28} color='lightseagreen' />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex relative h-[120px] bg-gray-800'>
                <img className='absolute h-full w-full  opacity-70' src={taskbg} alt="" />
                <div className='relative h-[fit-content] top-[50%] pl-2'>
                  <h3 className='text-white font-[600] w-[90%]'>Living Room Dusting</h3>
                </div>
                <div className='relative right-1 top-1 h-[fit-content]'>
                  <TiTick size={28} color='lightseagreen' />
                </div>
              </div>
            </SwiperSlide> */}
            {filteredTasks.map((task, index) => (
              <SwiperSlide key={index}>
                <div className='flex relative h-[120px] bg-gray-800'>
                  <img className='absolute h-full w-full opacity-70' src={taskbg} alt="" />
                  <div className='relative h-[fit-content] top-[50%] w-full pl-2'>
                    <h3 className='text-white font-[600] w-[90%]'>{task.name}</h3>
                  </div>
                  {task.isCompleted && (
                    <div className='relative right-1 top-1 h-[fit-content]'>
                      <TiTick size={28} color='lightseagreen' />
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
            <div></div>
          </Swiper>
        </div>

        {userRole.name != 'Housekeeper' && <div className='flex flex-col mt-2'>
          <h3 className='text-lg font-[500] mb-2'>Modify Task</h3>

          <div>
            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              modules={[Navigation]}
              navigation
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {condoTasks.map((task, index) => (
                <SwiperSlide key={index}>
                  <div className='flex flex-col items-center justify-center'>
                    <div className='flex h-[60px] w-[60px] '>
                      <img className='h-full w-full' src={taskbg} alt="" />
                    </div>
                    <div>
                      <h3 className='text-black font-[600] text-center mt-2'>{task.name}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>}
      </div>
      <Footer />
    </>
  )
}

export default Home