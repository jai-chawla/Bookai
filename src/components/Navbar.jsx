import React from 'react'

const Navbar = () => {
  return (
    <div className="relative z-20 overflow-hidden">
        <nav className="p-4 text-white w-screen">
          {/* Navbar content here */}
          <div className=' flex flex-col justify-start sm:flex-row  mt-7 w-[90%] h-[70px] sm:items-center sm:justify-center space-x-96 mx-auto '> 
            <div className='logo flex p-2 items-center'>
              <div className='mx-2 rounded-full w-[30px] h-[30px] bg-gradient-to-b from-[rgb(92,165,254)] to-[rgb(108,123,255)] '></div>
              <img src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/logo.png" className='w-[50px] ' alt="" />
              <span className='text-xl font-bold'>BooKAI</span>
            </div>
          <ul className=" hidden sm:flex  sm:items-center space-x-4 sm:space-x-7 text-[17px]">
            <li><a href="#home" className='hover:text-purple-600'>Features</a></li>
            <li><a href="#about" className='hover:text-purple-600'>How It Works</a></li>
            <li><a href="#contact" className='hover:text-purple-600'>Roadmap</a></li>
            <li><a href="#contact" className='hover:text-purple-600'>API</a></li>
            <li><a href="#contact" className='hover:text-purple-600'>Price</a></li>
            <li><a href="#contact" className='hover:text-purple-600'>Models</a></li>
            <li><button className=' w-[170px] h-[46px] my-0 px-[10px] py-[20px] rounded-[4px] no-underline bg-gradient-to-r from-[rgb(110,119,255)] to-[rgb(91,171,254)] flex justify-center items-center'>Login / Sign Up</button></li>
            {/* <button className='bg-yellow-200'>heelo</button> */}
          </ul>
          </div>
        </nav>
        {/* Other content can be added here */}
      </div>
  )
}

export default Navbar