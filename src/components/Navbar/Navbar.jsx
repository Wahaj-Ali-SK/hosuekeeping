import React, { useState } from 'react';
import logo from '../../assets/logo.webp';
import instagram from '../../assets/instagram.webp';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Popover, PopoverButton, PopoverPanel, Transition, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const categories = [
    "Eat & Drink",
    "Upcoming Events",
    "Health, Faith, & Wellness",
    "Things To Do",
    "Long Beach History",
    "Music, Art, & Entertainment",
    "Community",
    "Non-Profits",
    "Just For Laughs",
    "Youth Activities",
    "Sports",
    "Shop Small",
    "Schools & Education",
    "Human Interests",
    "Homes & Real State",
    "Business & Preofessioanl"
  ];

  return (
    <nav className='py-2 flex border-green-700 border-b-2 bg-black justify-between md:justify-around items-center sticky top-0 z-50'>
      <Link to="/" className='flex'>
        <img className='object-over max-w-[120px]' src={logo} alt="Lb908" />
      </Link>

      <ul id='nav-menu' className="hidden md:flex gap-8">
        {/* <li>
          <Popover>
            <PopoverButton className="text-sm/6 font-medium text-white focus:outline-none data-[active]:text-white data-[hover]:text-green-600 flex items-center gap-2">
              Home
              <FaAngleDown className="size-5 fill-white/60 "/>
            </PopoverButton>
            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel
                anchor="bottom"
                className="divide-y divide-white/5 rounded-xl bg-black text-sm/6 [--anchor-gap:var(--spacing-5)]"
              >
                <div className="p-3">
                  {categories.map((category, index) => (
                    <a key={index} className="block rounded-lg py-1 px-3 transition hover:bg-white/5" href="#">
                      <p className="font-semibold text-white">{category}</p>
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>
        </li> */}
        <li><Link to="/" className='text-white font-medium text-lg m-3 p-3 hover:text-green-600'>Home</Link></li>
        <li><Link to="/our-subscription-box" className='text-white font-medium text-lg m-3 p-3 hover:text-green-600'>Our Subscription</Link></li>
        <li><Link to="/the-magazine" className='text-white font-medium text-lg m-3 p-3 hover:text-green-600'>The Magzine</Link></li>
        <li><Link to="/merchandise" className='text-white font-medium text-lg m-3 p-3 hover:text-green-600'>Merchandise</Link></li>
      </ul>

      {/* <button className='hidden mr-4 md:flex'>
        <img src={instagram} className='object-over max-w-12 max-h-12' alt="instagram" />
      </button> */}

      <button className='p-2 md:hidden text-white text-xl' onClick={handleMenu}>
        <GiHamburgerMenu />
      </button>

      <div id='nav-dialoge' className={`fixed z-10 md:hidden ${isMenuOpen ? '' : 'hidden'} bg-black inset-0`}>
        <div id="nav-bar" className='flex justify-between p-3'>
          <a href="/" className='flex m-4'>
            <img className='object-over max-w-[150px]' src={logo} alt="Lb908" />
          </a>
          <button className='p-2  text-white text-xl' onClick={handleMenu}>
            <IoCloseSharp />
          </button>
        </div>
        <div className='h-[1px] bg-green-600'></div>
        <ul className='flex flex-col ml-5'>
          {/* <li>
            <Disclosure as="div" className="p-2" defaultOpen={true}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                  Home
                </span>
                <FaAngleDown className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm/5 text-white">
                {categories.map((category, index) => (
                  <a key={index} className="block rounded-lg py-1 px-3 transition hover:bg-white/5" href="#">
                    <p className="font-semibold text-white">{category}</p>
                  </a>
                ))}
              </DisclosurePanel>
            </Disclosure>
          </li> */}
          <li className='p-2'><Link to="/" className='text-white font-medium  hover:text-green-600'>Home</Link></li>
          <li className='p-2'><Link to="/our-subscription-box" className='text-white font-medium  hover:text-green-600'>Our Subscription</Link></li>
          <li className='p-2'><Link to="/the-magazine" className='text-white font-medium hover:text-green-600'>The Magzine</Link></li>
          <li className='p-2'><Link to="/merchandise" className='text-white font-medium hover:text-green-600'>Merchandise</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar