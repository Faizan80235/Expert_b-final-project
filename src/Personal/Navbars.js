import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NProgress from 'nprogress'; // Import NProgress
import 'nprogress/nprogress.css'; // Import NProgress styles
import image from "../Personal/images/image7.png";

export default function Navbars() {
  const location = useLocation(); // React Router hook to track route changes

  useEffect(() => {
    NProgress.start(); // Start loading animation
    setTimeout(() => {
      NProgress.done(); // End loading animation after route change
    }, 500); // Adjust the timeout as needed
  }, [location]); // Trigger on route changes

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img src={image} className="mt-3" alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/Products">Products</Link>
              </li>
              
              {/* Contact Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/Contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Login">Login</Link>
                  </li>
                  
                </ul>
              </li>

              {/* Dashboard Dropdown (New) */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbarDashboardDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dashboard
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDashboardDropdown">
                  <li>
                    <Link className="dropdown-item" to="/Dashboard/Profile">User Dashbaord</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Validation">Admin Dashbaord</Link>
                  </li>
                
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
