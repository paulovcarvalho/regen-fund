import React from 'react'

function Footer() {
  return (

<footer className="p-4 w-screen md:px-6 md:py-8 bg-black overflow-clip">
  <div className="w-screen flex sm:items-center">
        <a href="" 
          className="flex items-center mb-4 sm:mb-0">
            <span className="hidden md:block self-center text-2xl font-Cormorant font-semibold whitespace-nowrap text-white">Regenerative Fund</span>
        </a>
        <ul className="flex w-screen flex-wrap items-center px-10 space-x-6 mb-6 text-sm font-Montserrat text-white sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" className="mr-4 p-3 rounded-full hover:bg-slate-800 md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" className="mr-4 p-3 rounded-full hover:bg-slate-800 md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="mr-4 p-3 rounded-full hover:bg-slate-800 md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="#" className="rounded-full p-3 hover:bg-slate-800">Contact</a>
            </li>
        </ul>
    </div>
  
    <hr className="hidden md:block my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="hidden md:block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 
    <a href="" 
      className="rounded-full hover:bg-slate-800 ">Value Flow™</a>
      All Rights Reserved.
   
    </span>
</footer>
  )
}

export default Footer