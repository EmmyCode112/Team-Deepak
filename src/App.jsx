import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';

import Cart from './Components/Cart/Cart';
import Courses from './Components/Home/Sections/Courses';
import { CartProvider } from './Components/CartContext';
import Payment from './Components/Payment';

const App = () => {
  return (
    <div className='App'>
      <CartProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/shopping-cart' element={<Cart />} />
            <Route path='/payment' element={<Payment />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
};

export default App;
