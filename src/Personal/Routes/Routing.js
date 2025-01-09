import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbars from '../Navbars';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Signup from '../Pages/Signup';
import Product from '../Pages/Product';
import UserForm from '../../Dashboard/UserDashboard/UserForm';
import Footer from '../Footer'; // Import Footer Component
import '../../App.css'; // Import Global Styles

function Routing() {
  // State for dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode to body on change
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme'); // Add dark mode class
    } else {
      document.body.classList.remove('dark-theme'); // Remove dark mode class
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      {/* Pass dark mode and toggle function to Navbar */}
      <Navbars toggleTheme={toggleTheme} darkMode={darkMode} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Products' element={<Product />} />
        <Route path='/Admin' element={<Product />} />
        <Route path='/Products/Add' element={<UserForm />} />
      </Routes>
      {/* Footer Section */}
   
    </BrowserRouter>
  );
}

export default Routing;
