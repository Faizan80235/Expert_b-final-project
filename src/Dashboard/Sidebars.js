import React, { useState } from "react";
import { Link } from "react-router-dom";
import image7 from "../Personal/images/image7.png"; // Ensure the image path is correct

export function Sidebars() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false); // State to manage the loading state

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setLoading(true); // Show loading indicator when sidebar is toggled
    setSidebarOpen(prevState => !prevState);

    // Simulate a delay to show the loading spinner
    setTimeout(() => {
      setLoading(false); // Hide loading indicator after a delay
    }, 1000); // Change this delay as needed
  };

  const sidebarStyles = {
    backgroundColor: "#f8f9fa",
    position: "fixed",
    top: 0,
    left: isSidebarOpen ? "0" : "-250px", // Sidebar visibility based on state
    width: "250px",
    height: "100vh",
    zIndex: 1000,
    paddingTop: "20px",
    transition: "0.3s",
    overflowY: "auto",
  };

  const contentStyles = {
    marginLeft: isSidebarOpen ? "250px" : "0", // Shift content when sidebar is open
    paddingTop: "20px",
    transition: "margin-left 0.3s",
  };

  const sidebarToggleBtnStyles = {
    position: "absolute",
    top: "15px",
    left: "15px",
    backgroundColor: "white",
    border: "none",
    fontSize: "20px",
    color: "black",
    zIndex: 2000,
  };

  const sidebarCloseBtnStyles = {
    position: "absolute",
    top: "15px",
    left: "15px",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "24px",
    color: "black",
    zIndex: 2000,
  };

  const spinnerStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "30px",
    color: "#000",
    zIndex: 1500,
  };

  return (
    <div className="d-flex">
      {/* Sidebar Toggle Button (Hamburger Icon for small screens) */}
      <button
        className={`sidebar-toggle-btn ${isSidebarOpen ? 'd-none' : 'd-block'}`} // Hide hamburger icon when sidebar is open
        onClick={toggleSidebar}
        style={sidebarToggleBtnStyles}
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Close Button for Sidebar */}
      <button
        className={`sidebar-close-btn ${isSidebarOpen ? 'd-block' : 'd-none'}`} // Hide close icon when sidebar is closed
        onClick={toggleSidebar}
        style={sidebarCloseBtnStyles}
      >
        <i className="fas fa-times"></i>
      </button>

      {/* Sidebar */}
      <div
        className="sidebar"
        style={sidebarStyles}
      >
        {/* Loading Spinner */}
        {loading && <div style={spinnerStyles}><i className="fas fa-spinner fa-spin"></i></div>}

        {/* Sidebar Logo */}
        <div className="p-3 text-center">
          <img src={image7} alt="Dashboard Logo" className="img-fluid" />
        </div>

        {/* Sidebar Navigation */}
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/Dashboard" className="nav-link">
              <i className="fas fa-tachometer-alt me-2"></i>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Category" className="nav-link">
              <i className="fas fa-user me-2"></i>
              Category
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ProductForm" className="nav-link">
              <i className="fas fa-shopping-cart me-2"></i>
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Message" className="nav-link">
              <i className="fas fa-envelope me-2"></i>
              Messages
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/logout" className="nav-link">
              <i className="fas fa-sign-out-alt me-2"></i>
              Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div
        className="content"
        style={contentStyles}
      >
        {/* Your main content goes here */}
      </div>
    </div>
  );
}

export default Sidebars;
