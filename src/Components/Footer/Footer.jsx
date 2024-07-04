import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer mx-auto flex justify-start items-center mt-[100px] pt-[60px] pb-[20px]'>
      <div className="content w-full flex flex-col items-center text-white gap-1">
       <p className='flex flex-wrap items-center justify-center'> <span className='text-sm'>copyright &copy;  Scholar Organisation.</span> All right reserve</p>
        <p>Crafted with <span className='text-[red]'>❤</span>  by EmmyCode</p>
      </div>
    </div>
  )
}

export default Footer
