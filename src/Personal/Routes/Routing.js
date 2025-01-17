import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Signup from '../Pages/Signup';
import Product from '../Pages/Product';
import Login from '../Pages/Login';
import Form from '../../Dashboard/Form';
import Dashboard from '../../Dashboard/Dashboard';
import CategoryForm from '../../Dashboard/CategoryForm';
import Message from '../../Dashboard/Message';
import Logout from '../../Dashboard/Logout';
import Sidebar from '../../Dashboard/Sidebars';
import ValidationForm from '../ValidationForm';
import { ProfileForm } from '../../UserDashboard/ProfileForm';
import  Dashboard3  from '../../UserDashboard/Dashboard';

function Routing() {
  const location = useLocation();

  // Define paths for showing Sidebars
  const adminPaths = [
    "/ProductForm",
    "/Dashboard",
    "/Category",
    "/Message",
    "/logout"
  ];

  const userPaths = [
    "/index/user/Dashboard/Myprofile"
  ];

  // Show sidebars based on current location
  const showAdminSidebar = adminPaths.includes(location.pathname);
  const showUserSidebar = userPaths.includes(location.pathname);

  return (
    <div>
      {showUserSidebar && <Dashboard3 />}
      {showAdminSidebar && <Sidebar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Products" element={<Product />} />
        <Route path="/Admin" element={<Product />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard/Profile" element={<Login />} />

        {/* Admin Dashboard Routes */}
        <Route path="/ProductForm" element={<Form />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Category" element={<CategoryForm />} />
        <Route path="/Message" element={<Message />} />
        <Route path="/logout" element={<Logout />} />

        {/* Validation and User Dashboard */}
        <Route path="/Validation" element={<ValidationForm />} />
        <Route path="/index/user/Dashboard/Myprofile/profileForm" element={<ProfileForm />} />
      </Routes>
    </div>
  );
}

export default Routing;
