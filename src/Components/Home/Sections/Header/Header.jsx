import React from "react";
import "./Header.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const swiperStyles = {
  container: {
    width: "100%",
    margin: "0",
  },
  slide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    height: "100%",
    width: "100%",
    margin: "auto",
  },
};

const Header = () => {
  return (
    <div className="header top-0 w-full relative items-center flex p-10">
      <div
        className="swiper-container w-[80%] m-auto mt-10"
        style={swiperStyles.container}
      >
        <Swiper
          style={swiperStyles.container}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop={true}
        >
          <SwiperSlide style={swiperStyles.slide} className="mt-[50px] m-auto">
            <div className="con first w-full m-auto text-center rounded-md">
              <video src=""></video>
              <div className="absolute bottom-[10%] pl-10 flex flex-col justify-start items-start">
                <span>We speak digital. You speak success.</span>
                <a className="transition hover:text-white bg-transparent py-3 px-4 mt-4 text-lg rounded-[30px] border-2 border-[#7a6ad8]">
                  Our Courses
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={swiperStyles.slide} className="mt-[50px] m-auto">
            <div className="con second w-full m-auto text-center rounded-md">
              <div className="absolute bottom-[10%] pl-10 flex flex-col justify-start items-start">
                <span>We're passionate marketers on a mission</span>
                <a className="transition hover:text-white bg-transparent py-3 px-4 mt-4 text-lg rounded-[30px] border-2 border-[#7a6ad8]">
                  Our team
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={swiperStyles.slide} className="mt-[50px] m-auto">
            <div className="con third w-full m-auto text-center rounded-md">
              <div className="absolute bottom-[10%] pl-10 flex flex-col justify-start items-start">
                <p className="block">Learn. Grow. Give Back</p>
                <a className="transition hover:text-white bg-transparent py-3 px-4 mt-4 text-lg rounded-[30px] border-2 border-[#7a6ad8]">
                  See More
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={swiperStyles.slide} className="mt-[50px] m-auto">
            <div className="con forth w-full m-auto text-center rounded-md">
              <div className="absolute bottom-[10%] pl-10 flex flex-col justify-start items-start">
                <p className="block">Learn. Grow. Give Back</p>
                <a className="transition hover:text-white bg-transparent py-3 px-4 mt-4 text-lg rounded-[30px] border-2 border-[#7a6ad8]">
                  See More
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={swiperStyles.slide} className="mt-10 m-auto">
            <div className="con fifth w-full m-auto text-center rounded-md">
              <div className="absolute bottom-[10%] pl-10 flex flex-col justify-start items-start">
                <p className="block">Learn. Grow. Give Back</p>
                <a className="transition hover:text-white bg-transparent py-3 px-4 mt-4 text-lg rounded-[30px] border-2 border-[#7a6ad8]">
                  See More
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Header;
