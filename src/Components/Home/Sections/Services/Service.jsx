import React from 'react'
import { sevices } from '../../../../assets/asset'
import Cards from '../../../../Components/Cards'

const Service = () => {
  return (
    <section className='w-[90%] mx-auto mt-[70px] pt-[60px]' id='services'>
      <h1 className='text-center py-3 text-4xl text-[#7a6ad8] mb-4'>SERVICES</h1>
      <div className='grid-col-3 grid gap-14'>
        {sevices.map((item,index)=>(

            <Cards 
            key={index}
            image={item.image}
            service={item.service}
            detail={item.detail}
            btn={item.btn}
            />

        ))}
      </div>
    </section>
  )
}

export default Service
