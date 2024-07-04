import React from 'react'

const Team_item = ({id, work, Name, image, media1, media2, media3}) => {
  return (
    <div className='bg-[#f1f0fe] rounded-3xl text-center relative p-[30px]'>
      <img className='absolute rounded-full object-cover object-center h-[200px] w-[200px] top-[-50%]  left-[0%] m-auto right-[0%]' src={image} alt="" />
      <div className='mt-[100px]'>
        <span className='text-[#7a6ad8] text-sm'>{work}</span>
        <p className='text-xl font-medium my-1'>{Name}</p>
        <ul className="links flex items-center justify-center gap-6 mt-2">
            <li className='media bg-white w-[35px] h-[35px] flex items-center justify-center rounded-full hover:bg-[#7a6ad8] cursor-pointer'><a className={`text-[#7a6ad8] ${media1}`} href=""></a></li>
            <li className='media bg-white w-[35px] h-[35px] flex items-center justify-center rounded-full hover:bg-[#7a6ad8] cursor-pointer'><a className={`text-[#7a6ad8] ${media2}`} href=""></a></li>
            <li className='media bg-white w-[35px] h-[35px] flex items-center justify-center rounded-full hover:bg-[#7a6ad8] cursor-pointer'><a className={`text-[#7a6ad8] ${media3}`}href=""></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Team_item
