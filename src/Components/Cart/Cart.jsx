import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext'; 
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, totalPrice } = useContext(CartContext);
  const [showNav, setShowNav] = useState(false);

  return (

    <div className='cart-container'>
        <nav className='navbar' >
    <div className="logo flex justify-between">
    <Link to="/" className='text-3xl font-bold'>SCHOLAR</Link>
     <hr className='text-white h-full' />
    </div>
    <ul className={`nav-links flex justify-between gap-5 md:gap-1  ${showNav ? 'show-nav-links' : ''}`}>
      <li><a href="/" className='py-2 px-4 rounded-[3px] text-sm active'>Home</a></li>
      <li><a href="#services" className='py-2 px-4 text-sm rounded-[3px]'>Services</a></li>
      <li><a href="#courses" className='py-2 px-4 text-sm rounded-[3px]'>Courses</a></li>
      <li><a href="#team" className='py-2 px-4 text-sm rounded-[3px]'>Team</a></li>
      <li><a href="#contact" className='py-2 text-sm px-4 rounded-[3px] max-md:w-full'>Register Now</a></li>
    </ul>
    <div className="flex gap-3 items-center">
      <div className="cart-item cursor-pointer p-1 w-8 h-8 flex items-center justify-center rounded-full">
       <Link to={'/shopping-cart'}> <i className="fa fa-shopping-cart"></i></Link>
      </div>
      <div className="icon md:hidden sm:inline-block">
        <i onClick={() => setShowNav(prev => !prev)} className={`fa ${showNav ? 'fa-times' : 'fa-bars'} text-lg`}></i>
      </div>
    </div>
  </nav>

    <div className='cart'>
      <h1 className='text-white text-[45px] text-center my-5 max-md:text-[30px]'>Shopping Cart</h1>
      {cart.length === 0 ? (
        <>
          <p className='text-white text-center'>Your cart is empty</p>
          <div className='text-center mt-6'>
            <Link to="/courses" className='text-white text-xl  underline'>Browse for Course</Link>
          </div>
        </>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className='flex items-center justify-between my-2 p-2 bg-[#f1f0fe] rounded'>
                <div className='flex items-center'>
                  <img className='w-[80px] mr-4' src={item.image} alt={item.courseName} />
                  <div>
                    <h2 className='text-lg'>{item.courseName}</h2>
                    <p className='text-md'>₦{item.price}</p>
                  </div>
                </div>
                <button
                  className='bg-red-500 text-white py-1 px-3 rounded outline-none'
                  onClick={() => removeFromCart(item)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          <div className='total text-right my-4 mt-5'>
            <h2 className='text-xl text-white'>Total Price: ₦{totalPrice.toFixed(2)}</h2>
            <Link to='/payment'>
              <button className='mt-2 py-3 px-3 text-white bg-red-500 outline-none'>Proceed to Payment</button>
            </Link>
          </div>
        </>
      )}
    </div>
    </div>
  );
};

export default Cart;
