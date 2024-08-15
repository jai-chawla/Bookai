import React from 'react'

const Footer = () => {
  return (
    <div className='h-[100px] text-gray-400 text-center'>
      <div className='border border-gray-800'></div>
      <footer>
        <br />
        <p className='text-white'>© 2024 BookAI. All rights reserved.</p>
        <div className='flex space-x-3 justify-center'>
          <div>Terms of Service</div>
          <div>Privacy Policy</div>
          <div>Contact Us</div>
        </div>
      </footer>
    </div>
  )
}

export default Footer