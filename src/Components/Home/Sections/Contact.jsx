import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className='w-[90%] mx-auto mt-[70px] pt-[60px] ' id='contact'>
        <h1 className='text-center py-3  text-4xl text-[#7a6ad8] mb-4'>CONTACT US</h1>
        <div className='row mt-[50px] contact'>
      <div className="left col-lg-6 col-md-12 bg-[#f1f0fe] p-[60px]">
        <h1 className='text-3xl w-[80%] font-medium my-3'>Feel Free To Contact Us Anytime</h1>
        <p className='text-[13px] leading-6 mt-5'>Don't wait. Enroll now and unlock your digital marketing potential!</p>
      </div>
      <div className="right-con col-lg-6 col-md-12">
        <form className='flex flex-col gap-6'>
            <input type="text" placeholder='Your Name'/>
            <input type="email" placeholder='Your@gmail.com'/>
            <textarea name="" id="" placeholder='Drop message'></textarea>
            <button type='Submit' className='px-[25px] transition-[3s] rounded-[25px] bg-white text-sm text-[#7a6ad8] hover:opacity-[.9]'>Send Message</button>
        </form>
      </div>
    </div>
    </section>
  )
}

export default Contact
