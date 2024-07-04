import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`z-[999] navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo flex justify-between">
        <Link to="/" className="text-3xl font-bold">
          TEAM DEEPAK
        </Link>
      </div>
      <ul
        className={`nav-links flex justify-between gap-5 md:gap-1 ${
          showNav ? "show-nav-links" : ""
        } ${scrolled ? "scrolled" : ""}`}
      >
        <li>
          <a href="#" className="py-2 px-4 rounded-[3px] text-sm active">
            Home
          </a>
        </li>
        <li>
          <a href="#services" className="py-2 px-4 text-sm rounded-[3px]">
            Services
          </a>
        </li>
        <li>
          <a href="#courses" className="py-2 px-4 text-sm rounded-[3px]">
            Courses
          </a>
        </li>
        <li>
          <a href="#team" className="py-2 px-4 text-sm rounded-[3px]">
            Team
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="py-2 text-sm px-4 rounded-[3px] max-md:w-full"
          >
            Register Now
          </a>
        </li>
      </ul>
      <div className="flex gap-3 items-center">
        <Link to={"/shopping-cart"}>
          <div className="cart-item cursor-pointer p-1 w-8 h-8 flex items-center justify-center rounded-full relative">
            {cart.length > 0 && (
              <div className="dot rounded-full text-red-500 absolute text-[10px] font-bold top-[-5px]">
                {cart.length}
              </div>
            )}{" "}
            <i className="fa fa-shopping-cart"> </i>
          </div>
        </Link>

        <div className="icon md:hidden sm:inline-block">
          <i
            onClick={() => setShowNav((prev) => !prev)}
            className={`fa ${showNav ? "fa-times" : "fa-bars"} text-lg`}
          ></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
