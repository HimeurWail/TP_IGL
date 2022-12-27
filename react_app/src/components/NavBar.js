import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full border-b border-gray-200 ">
            <div class="container flex flex-wrap items-center justify-between">
            <div className='flex items-center'>
                <img src="" alt='Logo' className='h-6 mr-3 sm:h-9" alt="Flowbite Logo' />
                <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>Our Name</span>
            </div>
            <div className='items-center mx-auto justify-between hidden w-full md:flex md:w-auto md:order-1'>
                <ul class="flex flex-col p-4 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                <li>
                    <Link className='md:bg-transparent md:text-[#EE462F] md:p-0' >Home</Link>
                </li>
                <li>
                    <Link className='text-gray-700 md:hover:bg-transparent md:hover:text-[#EE462F] md:p-0 md:dark:hover:text-white md:dark:hover:bg-transparent'>Find</Link>
                </li>
                <li>
                    <Link className='text-gray-700 md:hover:bg-transparent md:hover:text-[#EE462F] md:p-0 md:dark:hover:text-white md:dark:hover:bg-transparent'>About Us</Link>
                </li>
                <li>
                    <Link className='text-gray-700 md:hover:bg-transparent md:hover:text-[#EE462F] md:p-0 md:dark:hover:text-white md:dark:hover:bg-transparent'>Contact Us</Link>
                </li>
                </ul>
            </div>
            </div>
    </nav>
  )
}

export default NavBar