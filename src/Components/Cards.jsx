import React from "react";

const Cards = ({ image, service, detail, btn }) => {
  return (
    <div className="w-[90%] mt-5">
      <div className="relative bg-[#f1f0fe] pt-[80px] transition-[3s] px-[30px] pb-[50px] rounded-[30px] hover:bg-[#7a6ad8] hover:text-white">
        <div className="absolute top-[-15%] right-[-10%] bg-[#7a6ad8] p-4 rounded-full">
          <img width={70} src={image} alt="" />
        </div>
        <div className="text">
          <h3 className="font-medium text-xl py-2">{service}</h3>
          <p className="text-[13px]">{detail}</p>

          <button className="mt-4 py-[8px] px-[17px] transition-[3s] rounded-[25px] bg-white text-sm text-[#7a6ad8] hover:opacity-[.9]">
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
