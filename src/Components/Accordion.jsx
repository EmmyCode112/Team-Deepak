import React, { useState } from 'react'
import './Accordion.css'

const Accordion = ({firstLine, AccordionItem}) => {

    const [accordian, setAccordian] = useState(false)
     
  return (
    <div className={accordian ? 'accor' : 'accorInactive'}>
      <div onClick={()=>setAccordian((prev)=>!prev)} className={`${accordian ? 'text-[#7a6ad8] transition-colors top-accor-text' : 'text-inherit '} top-accor top flex justify-between py-2 cursor-pointer font-bold`}>
        <div className="left line">{firstLine}</div>
        <div className="right w-[25px] h-[25px] rounded-full bg-[#7a6ad8] flex items-center justify-center">
            <i className={`fa ${accordian === false ? 'fa-plus rotate' : 'fa-minus rotateY'}  text-white`}></i></div>
      </div>
      <div className="bottom text-sm mb-6 pt-2 leading-6">
        {AccordionItem}
      </div>
    </div>
  )
}

export default Accordion
