import React, { useState } from "react";
import { Link } from "react-router-dom";
import image7 from "../Personal/images/image7.png"; // Ensure the image path is correct

export function Sidebars() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  return (
    <div className="d-flex">
      {/* Sidebar Toggle Button (Hamburger Icon for small screens) */}
      <button
        className={`sidebar-toggle-btn d-lg-none ${isSidebarOpen ? 'd-none' : 'd-block'}`} // Hide hamburger icon when sidebar is open
        onClick={toggleSidebar}
        style={{
          position: "absolute",
          top: "15px",
          left: "15px",
          backgroundColor: "white",
          border: "none",
          fontSize: "20px",
          color:"black",
          zIndex: 2000,
        }}
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Close Button for Sidebar */}
      <button
        className={`sidebar-close-btn d-lg-none ${isSidebarOpen ? 'd-block' : 'd-none'}`} // Hide close icon when sidebar is closed
        onClick={toggleSidebar}
        style={{
          position: "absolute",
          top: "15px",
          left: "15px",
          backgroundColor: "transparent",
          border: "none",
          fontSize: "24px",
          color: "black",
          zIndex: 2000,
        }}
      >
        <i className="fas fa-times"></i>
      </button>

      {/* Sidebar */}
      <div
        className={`bg-light text-dark vh-100 sidebar position-fixed ${isSidebarOpen ? "d-block" : "d-none"} d-lg-block`} // Sidebar visible on large screens and toggled on mobile
        style={{
          width: "250px",
          transition: "0.3s",
          zIndex: 1000,
          top: 0,
          left: 0,
          paddingTop: "20px",
        }}
      >
        {/* Sidebar Logo */}
        <div className="p-3 text-center">
          <img src={image7} alt="Dashboard Logo" className="img-fluid" />
        </div>

        {/* Sidebar Navigation */}
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/" className="nav-link text-dark">
              <i className="fas fa-tachometer-alt me-2"></i>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Category" className="nav-link text-dark">
              <i className="fas fa-user me-2"></i>
              Category
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Product" className="nav-link text-dark">
              <i className="fas fa-shopping-cart me-2"></i>
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Message" className="nav-link text-dark">
              <i className="fas fa-envelope me-2"></i>
              Messages
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/logout" className="nav-link text-dark">
              <i className="fas fa-sign-out-alt me-2"></i>
              Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div
        className="content"
        style={{
          marginLeft: isSidebarOpen ? "250px" : "0", // Shift content when sidebar is open
          transition: "margin-left 0.3s",
          paddingTop: "20px",
        }}
      >
        {/* Your main content goes here */}
      </div>
    </div>
  );
}

export default Sidebars;
