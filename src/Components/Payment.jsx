import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import "./Payment.css";
import { Link } from "react-router-dom";
import { PaystackButton } from "react-paystack";
import emailjs from "emailjs-com";

const Payment = () => {
  const { totalPrice } = useContext(CartContext);
  const [showNav, setShowNav] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    courses: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPaystackButton, setShowPaystackButton] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    if (
      !formData.email ||
      !formData.name ||
      !formData.location ||
      !formData.courses
    ) {
      setError("All fields are required.");
      return false;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const config = {
    reference: new Date().getTime().toString(),
    email: formData.email,
    amount: totalPrice * 100, 
    publicKey: "pk_live_71c6db20b72fd3ad4243cb1c96532ff7cab4b90a",
  };

  const handleSuccess = (reference) => {
    console.log(reference);
    setFormData({
      name: "",
      email: "",
      location: "",
      courses: "",
    });
    setSuccess(true);
    setLoading(false);
    setShowPaystackButton(false);
  };

  const handleClose = () => {
    alert('Payment Closed')
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await emailjs.sendForm(
        "service_8tb3tt8", 
        "template_7k68gab",
        event.target,
        "bNJDw0ml4XzaBOXay" 
      );
      setShowPaystackButton(true);
    } catch (error) {
      setError(`No internet or an Error occurred. ${error.text}`);
      setLoading(false);
    }
  };

  return (
    <div className="payment-wrapper">
      <nav className="navbar">
        <div className="logo flex justify-between">
          <Link to="/" className="text-3xl font-bold">
            SCHOLAR
          </Link>
          <hr className="text-white h-full" />
        </div>
        <ul
          className={`nav-links flex justify-between gap-5 md:gap-1  ${
            showNav ? "show-nav-links" : ""
          }`}
        >
          <li>
            <a href="/" className="py-2 px-4 rounded-[3px] text-sm active">
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
          <div className="cart-item cursor-pointer p-1 w-8 h-8 flex items-center justify-center rounded-full">
            <Link to={"/shopping-cart"}>
              <i className="fa fa-shopping-cart"></i>
            </Link>
          </div>
          <div className="icon md:hidden sm:inline-block">
            <i
              onClick={() => setShowNav((prev) => !prev)}
              className={`fa ${showNav ? "fa-times" : "fa-bars"} text-lg`}
            ></i>
          </div>
        </div>
      </nav>

      <div className="payment px-[60px] m-auto">
        <h1 className="text-center my-5 text-white text-[45px] make-payment">
          Make your payment
        </h1>
        <div className="form-container flex items-center justify-center">
          <div className="form-con">
            <form onSubmit={handleSubmit} >

              <h6 className="text-center">Fill in the form and submit to proceed to payment.</h6>
              <div className="full">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="loc">
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="courses"
                  placeholder="Courses to buy"
                  value={formData.courses}
                  onChange={handleChange}
                />
              </div>
              <div className="full">
                <input
                  type="email"
                  name="email"
                  placeholder="YourEmail@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <p className="text-md text-center mt-2">
                  You're about to pay: ₦{totalPrice.toFixed(2)}
                </p>
              </div>

              <button type="submit" disabled={loading} className='border-none outline-none px-4 py-3 bg-[#7a6ad8] text-white'>
                {loading ? "Processing..." : "Submit"}
              </button>

              {showPaystackButton && (
                <div className="paystack-button-container flex justify-center mt-4">
                  <PaystackButton
                    {...config}
                    text="Pay Now"
                    className="paystack-button"
                    callback={handleSuccess}
                    onClose={handleClose}
                  />
                </div>
              )}

              {error && <div className="error">{error}</div>}
              {success && (
                <div className="success">Payment was successful!</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
