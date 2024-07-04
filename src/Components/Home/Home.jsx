import React from 'react'
import Navbar from '../Navbar/Navbar';
import Service from './Sections/Services/Service'
import About from './Sections/About'
import Header from './Sections/Header/Header'
import Courses from './Sections/Courses'
import Team from './Sections/Team'
import Contact from './Sections/Contact'
import Footer from '../../Components/Footer/Footer';
import Testimonial from './Sections/Testimonial';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Service />
      <About />
      <Courses />
      <Team />
      <Testimonial/>
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
