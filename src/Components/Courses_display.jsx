import React, { useEffect, useState } from "react";
import "./Courses_display.css";
import "animate.css";

const Courses_display = ({
  image,
  id,
  teacher,
  courseName,
  category,
  price,
  btn,
  detail,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => {
      clearTimeout(timer);
      setIsVisible(false);
    };
  }, [category]);

  return (
    <div
      className={`course animate__animated ${
        isVisible ? "animate__zoomInRight" : ""
      }`}
    >
      <div className="contain flex flex-col gap-2 rounded-3xl overflow-hidden bg-[#f1f0fe] pb-2">
        <div className="top relative overflow-hidden">
          <img
            className="w-full h-[300px] object-cover object-bottom"
            src={image}
            alt=""
          />
          <div className="layer absolute left-0 top-0  text-center flex items-center w-full h-full justify-center">
            <i className="fa fa-plus font-bold plus"></i>
          </div>
          <span className="absolute top-[10%] left-[5%] text-[#7a6ad8] py-2 px-4 bg-white rounded-[5px] leading-tight text-sm  cate">
            {category}
          </span>
          <div className="price absolute top-[-4%] right-[-4%] w-[100px] h-[95px] rounded-full bg-[#7a6ad8] flex items-center justify-center text-white">
            <p className="font-bold text-xl flex gap-[2px]">
              {" "}
              <span className="text-sm">₦</span>
              {price}
            </p>
          </div>
        </div>
        <div className="bottom w-full px-4 py-3 ">
          <h6 className="font-light my-2 text-sm text-[#7a6ad8] ">{teacher}</h6>
          <h3 className="font-bold text-xl text-gray-800">{courseName}</h3>
        </div>
      </div>
    </div>
  );
};

export default Courses_display;
