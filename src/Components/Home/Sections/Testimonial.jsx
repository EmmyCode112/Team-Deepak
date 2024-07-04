import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Testimonial.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// Importing Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Testimonial = () => {
  return (
    <section className="w-[90%] mx-auto mt-[70px] pt-[60px] ">
      <h1 className="text-center py-3 text-4xl text-[#7a6ad8] mb-4">
        TESTIMONIAL
      </h1>
      <div className="wrap row gap-5 mt-[50px]">
        <div className="t-left col-lg-5 col-md-12 bg-white p-6">
          <h1 className="font-bold text-4xl my-3">What They Say About Us?</h1>
          <p className=" text-gray-500 leading-normal text-[12px] mt-[40px]">
            You can search free CSS templates on Google using different keywords
            such as templatemo portfolio, templatemo gallery, templatemo blue
            color, etc.
          </p>
        </div>
        <div className="t-right col-lg-6 col-md-12 relative rounded-[10px] bg-[#7a6ad8] pl-[40px] pr-[80px] py-[50px] text-white">
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop={true}
          >
            <SwiperSlide>
              <div className="flex flex-col gap-[4]">
                <div className="top flex  gap-[10px] items-center pb-2">
                  <img
                    src="./Team-01.jpeg"
                    alt=""
                    className="w-[100px] h-[100px] rounded-full"
                  />
                  <div>
                    <p>Social Media Marketing Student</p>
                    <p className="text-[26px] name mb-1">Kim Castro</p>
                  </div>
                </div>
                <div className="bottom">
                  <p>
                    <i className="fa fa-quote-left"></i>These courses were a game-changer! I finally understand how to leverage social media to grow my business. Thanks to the Social Media Marketing course, I'm connecting with customers in a whole new way. I feel empowered and excited - this is the best investment I've made in myself all year{" "}
                    <i className="fa fa-quote-right"></i>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-[4]">
                <div className="top flex  gap-[10px] items-center pb-2">
                  <img
                    src="./Team-02.jpeg"
                    alt=""
                    className="w-[100px] h-[100px] rounded-full"
                  />
                  <div>
                    <p>SEO & Content Marketing Student.</p>
                    <p className="text-[26px] name mb-1">William Ogiegbe</p>
                  </div>
                </div>
                <div className="bottom">
                  <p>
                    <i className="fa fa-quote-left"></i>I was skeptical at first o, but these courses are AMAZING! The SEO course helped me boost my fashion website traffic, and the Content Marketing course showed me how to write content that actually resonates with my audience. My sales have really gone through the roof. Thank you for this incredible opportunity{" "}
                    <i className="fa fa-quote-right"></i>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-[4]">
                <div className="top flex  gap-[10px] items-center pb-2">
                  <img
                    src="./Team-03.jpeg"
                    alt=""
                    className="w-[100px] h-[100px] rounded-full"
                  />
                  <div>
                    <p>Email Marketing Student</p>
                    <p className="text-[26px] name mb-1">Robert Rhone</p>
                  </div>
                </div>
                <div className="bottom">
                  <p>
                    <i className="fa fa-quote-left"></i>I'm a complete beginner when it comes to digital marketing, but these courses were clear, concise, and engaging. The instructors are true experts, and their passion is contagious. Now, I feel confident in my ability to craft killer emails and build a strong online presence. Highly recommend{" "}
                    <i className="fa fa-quote-right"></i>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-[4]">
                <div className="top flex  gap-[10px] items-center pb-2">
                  <img
                    src="./Team-04.jpeg"
                    alt=""
                    className="w-[100px] h-[100px] rounded-full"
                  />
                  <div>
                    <p>Google Analytics Student</p>
                    <p className="text-[26px] name mb-1">Deborah Onojah</p>
                  </div>
                </div>
                <div className="bottom">
                  <p>
                    <i className="fa fa-quote-left"></i> I've tried other online courses in the past, but nothing compares to the value gotten here! The lifetime access is fantastic - I can keep going back and refreshing my memory. The instructors are incredibly supportive, and the community aspect is a huge bonus. I'm so glad I found this program on time{" "}
                    <i className="fa fa-quote-right"></i>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-[4]">
                <div className="top flex  gap-[10px] items-center pb-2">
                  <img
                    src="./Team-05.jpeg"
                    alt=""
                    className="w-[100px] h-[100px] rounded-full"
                  />
                  <div>
                    <p>Full Course Pack Student</p>
                    <p className="text-[26px] name mb-1">Mohammed Sanisu</p>
                  </div>
                </div>
                <div className="bottom">
                  <p>
                    <i className="fa fa-quote-left"></i> Wow! Just wow! These courses have completely transformed my understanding of digital marketing. I used to feel overwhelmed, but now I feel empowered. Thank you for making these courses accessible and affordable. This knowledge is truly invaluable <i className="fa fa-quote-right"></i>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="absolute right-[2%] m-auto bottom-[5%] cursor-pointer items-center justify-center flex gap-2">
            <div className="cover">
              <div
                className="swiper-button-prev"
                style={{ color: "#7a6ad8" }}
              ></div>
            </div>
            <div className="cover">
              <div
                className="swiper-button-next"
                style={{ color: "#7a6ad8" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
