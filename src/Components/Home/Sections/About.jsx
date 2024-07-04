import React, { useState } from "react";
import { accordion } from "../../../assets/asset";
import Accordion from "../../../Components/Accordion";
import "./About.css";
const About = () => {
  return (
    <section className=" w-[90%] mx-auto mt-[70px] pt-[60px]">
      <h1 className="text-center py-3 text-4xl text-[#7a6ad8] mb-4 ">ABOUT</h1>
      <div className="wrapper row mt-5">
        <div className="left bg-[#f1f0fe] py-10 px-10 col-lg-6 col-md-12">
          <span className="font-bold text-4xl ">
            Learn. Grow. Give Back.
          </span>
          <p className="mt-6 text-[14px]">Every enrollment supports a worthy cause.
          Join our community to discover your digital potential.</p>
          <p className="mt-6 text-[14px]">
            We're a global team of passionate digital marketers, united by a
            mission: empowering YOU with in-demand skills to become a sort-after
            marketing genius. Our giveaway, one-time fee courses cover Social
            Media Marketing, Email Marketing, SEO, and Google Analytics.
          </p>

          <a href="#contact">
            <button className="hover:bg-[#7a6ad8] transition outline-none hover:text-white py-3 px-4 mt-4 text-lg rounded-[30px] border-2 border-[#7a6ad8]">
              Contact Us
            </button>
          </a>
        </div>
        <div className="right col-lg-6 col-md-12 bg-[#7a6ad8] rounded-2xl px-4 py-8">
          {accordion.map((accor, index) => (
            <Accordion
              key={index}
              AccordionItem={accor.accordionItem}
              firstLine={accor.firstLine}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
