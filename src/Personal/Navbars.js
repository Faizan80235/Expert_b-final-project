// import React from 'react'
// import image from "../Personal/images/image7.png"
// import { Link } from 'react-router-dom'
// export default function Navbars() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">

//           <a className="navbar-brand">
//             <img src={image} className="mt-3" />

//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link  className="nav-link active" aria-current="page" to="/"> Home</Link>
                

//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link text-dark" to="/About" >
//                   About
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link text-dark" href="#card" to="/Products">
//                   Products
//                 </Link>
//               </li>
//               <li className="nav-item">
//               <Link className="nav-link text-dark" href="#card" to="/Contact">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//             <form className="d-flex" role="search">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <button className="btn btn-outline-success" type="submit">
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>
//       </nav>

//     </div>
//   )
// }


import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NProgress from 'nprogress'; // Import NProgress
import 'nprogress/nprogress.css';  // Import NProgress styles
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
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
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
