import React, { useEffect, useContext } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CartContext } from './CartContext';  // Adjust the path as necessary

const ProductDetail = ({ course, onClose }) => {
  const { addToCart } = useContext(CartContext);

  if (!course) {
    return null;
  }

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  const handleAddToCart = () => {
    addToCart(course);
  };

  return (
    <div className="product-detail pt-[110px] pl-11 z-[1000] pr-5 max-md:z-[1001] w-full bg-[white] max-sm:pt-[30px] h-[100%]">
      <div className='text-3xl max-sm:mb-6'>Course Detail</div>
      <button
        title='close product detail'
        className="close-btn absolute max-sm:top-[6%] top-[16%] right-7 text-2xl outline-[#7a6ad8] border-none"
        onClick={onClose}
      >
        X
      </button>
      <div className="wrapper-cos flex flex-col gap-6 mt-3 items-start" >
        <div className="flex justify-start flex-col ">
          <h1 className='text-sm mb-2'>{course.courseName}</h1>
          <img className='w-[160px]' src={course.image} alt={course.courseName} />
        </div>
        <div className="right flex flex-col" data-aos="fade-left">
          <div className='flex flex-col gap-5 mt-2 text-sm'>
            <p className='text-[16px]'><span className='font-bold text-[#7a6ad8] text-[20px]'>Details : </span>{course.detailHead}{course.details}</p>
            <p  className='text-[18px] mt-2' ><span className='font-bold text-[#7a6ad8] text-[20px]'>Price :</span>  ₦{course.price}</p>
            <p  className='text-[16px] mt-2'> <span className='font-bold text-[#7a6ad8] text-[20px]'>Teacher :</span> {course.teacher}</p>

            <div>
              <span className='font-bold text-[#7a6ad8] text-[20px] '>What you'll learn</span>
            <div className='text-[15px] mt-2'>
              {course.courseDetail}
            </div>
            </div>
          </div>
          <div className="div mt-3">
            <button
              className='bg-[#7a6ad8] py-2 px-3 add-cartBtn text-white outline-none'
              data-aos="fade-left"
              onClick={handleAddToCart}
            >
              {course.btn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
