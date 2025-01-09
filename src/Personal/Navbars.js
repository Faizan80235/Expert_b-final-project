
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import NProgress from 'nprogress'; // Import NProgress
import 'nprogress/nprogress.css';  // Import NProgress styles
import image from "../Personal/images/image7.png";
import "./Style.css";

export default function Navbars() {
  const [searchQuery, setSearchQuery] = useState(''); // State to store the search query
  const location = useLocation(); // React Router hook to track route changes
  const navigate = useNavigate(); // Navigate to another page when search is submitted

  useEffect(() => {
    NProgress.start(); // Start loading animation
    setTimeout(() => {
      NProgress.done(); // End loading animation after route change
    }, 500); // Adjust the timeout as needed
  }, [location]); // Trigger on route changes

  // Handle input change in the search bar
  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value); // Update search query as user types
  };

  // Handle form submission for the search
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      // Check if the search query matches any known routes
      const lowerCaseQuery = searchQuery.trim().toLowerCase();
      const knownRoutes = ['home', 'about', 'products', 'contact'];

      // If the search matches a route, navigate to that page
      if (knownRoutes.includes(lowerCaseQuery)) {
        navigate(`/${lowerCaseQuery}`);
      } else {
        // Otherwise, handle content-based search (you can implement filtering here)
        navigate(`/search?q=${searchQuery}`);
      }
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
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
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/Contact">Contact</Link>
              </li>
            </ul>
            {/* Search Form */}
            <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery} // Controlled input
                onChange={handleSearchInput} // Update state as user types
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
