// Courses.js
import React, { useState, useEffect } from 'react';
import { courses } from '../../../assets/asset';
import Courses_display from '../../../Components/Courses_display';
import ProductDetail from '../../../Components/ProductDetail';
import './Courses.css';

const Courses = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isDetailVisible, setIsDetailVisible] = useState(false);
    const [animationClass, setAnimationClass] = useState('');

    const categories = ['All', 'Design', 'Development', 'Marketing'];

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setSelectedCourse(null); 
        setIsDetailVisible(false);
    };

    const handleCourseClick = (course) => {
        setSelectedCourse(course);
        setAnimationClass('show');
        setIsDetailVisible(true);
    };

    const handleCloseDetail = () => {
        setAnimationClass('hide');
        setTimeout(() => {
            setIsDetailVisible(false);
            setSelectedCourse(null);
        }, 150); 
    };

    const filteredCourses = selectedCategory === 'All'
        ? courses
        : courses.filter(course => course.category === selectedCategory);

    return (
        <section className='w-[90%] mx-auto mt-[70px] pt-[60px]' id='courses'>
            <h6 className='text-center py-3 text-4xl text-[#7a6ad8] mb-4 '>LATEST COURSES</h6>
            <div>
                <div className='filter-div flex justify-center gap-4 my-4 max-xl:w-[60%] max-lg:w-[] w-[50%] m-auto p-2 rounded-3xl bg-[#f1f0fe]'>
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            onClick={() => handleCategoryChange(category)}
                            className={`courses py-2 px-4 rounded cursor-pointer bg-[#7a6ad8] hover:text-[#7a6ad8] text-black ${
                                selectedCategory === category ? 'bg-[#7a6ad8] text-white' : 'bg-transparent text-[#7a6ad8]'
                            }`}
                        >
                            {category}
                        </div>
                    ))}
                </div>
                <div className="bottom grid grid-cols gap-10 mt-5">
                    {filteredCourses.map((item, index) => (
                        <div key={index} onClick={() => handleCourseClick(item)}>
                            <Courses_display
                                id={item.id}
                                image={item.image}
                                btn={item.btn}
                                price={item.price}
                                detail={item.details}
                                teacher={item.teacher}
                                courseName={item.courseName}
                                category={item.category}
                                {...courses}
                            />
                        </div>
                    ))}
                </div>
                {isDetailVisible && (
                    <div className='w-full bg-[#0000005d] h-[100vh] fixed left-0 top-0 z-[900] cov'>
                        <div className={`h-[100vh] fixed left-0 top-0 z-[900] bg-white w-[100%] max-sm:w-full course-display ${animationClass}`}>
                        <ProductDetail course={selectedCourse} onClose={handleCloseDetail} />
                    </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Courses;
