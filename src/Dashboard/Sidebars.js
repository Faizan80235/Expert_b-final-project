

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";
import image from "../Personal/images/slider-image-1.jpg";
import {
  
  faTachometerAlt,
  faUser,
  faShoppingCart,
  faEnvelope,
  faSignOutAlt,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import image7 from '../Personal/images/image7.png'; // Importing the image

export function Sidebars() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={`bg-light text-dark vh-100 position-fixed ${isSidebarOpen ? 'd-block' : 'd-none'} d-lg-block`}
        style={{ width: '250px', transition: '0.3s', zIndex: 1000 }}
      >
        <div className="p-3 text-center">
          {/* Image in Sidebar */}
          <img
            src={image7}
            alt="Dashboard Logo"
            className="img-fluid"
          />
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a href="#" className="nav-link text-dark">
              <FontAwesomeIcon icon={faTachometerAlt} className="me-2" />
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark">
              <FontAwesomeIcon icon={faUser} className="me-2" />
              Users
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark">
              <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
              Products
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark">
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              Messages
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark">
              <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
              Logout
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow-1 ms-lg-250">
        {/* Navbar / Sidebar Toggle */}
        <nav className="navbar navbar-light bg-light d-lg-none">
          <button className="btn" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} className="text-dark" />
          </button>
        </nav>

        {/* Main Content: State Cards */}
        <div className="container mt-4">
          <div className="col-lg-12 mb-4">
            <Carasuel />
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <StateCard />
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <StateCard2 />
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <StateCard3 />
            </div>
            <div className="col-lg-6 col-md-12 mb-4">
              <Card />
            </div>
            <div className="col-lg-6 col-md-12 mb-4">
              <RevenueChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Carasuel() {
  return (
    <div
      className="rounded-4 d-flex align-items-center "
      style={{
        marginLeft:"14%",
        background: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "90%",
        height: "300px", // Adjust height as needed
        padding: "20px",
        color: "#000", // Adjust text color
      }}
    >
      <div style={{ maxWidth: "400px" }}>
        <h1 className="fw-bold">Welcome back! FreshCart</h1>
        <p>FreshCart is simple & clean design for developer and designer.</p>
        <button className="btn btn-success">Create Product</button>
      </div>
    </div>
  );
}

function StateCard() {
  return (
    <div className="card  " style={{marginLeft:"40%"}}>
      <div className="card-header" style={{ color: "green", fontWeight: "bolder" }}>Earning</div>
      <div className="card-body">
        <h5 className="card-title">0$</h5>
        <p className="card-text">Zero Dollar Profit</p>
      </div>
    </div>
  );
}

function StateCard2() {
  return (
    <div className="card" style={{marginLeft:"30%"}}>
      <div className="card-header" style={{ color: "green", fontWeight: "bolder" }}>Customers</div>
      <div className="card-body">
        <h5 className="card-title">0</h5>
        <p className="card-text">Zero Customers</p>
      </div>
    </div>
  );
}

function StateCard3() {
  return (
    <div className="card" style={{marginLeft:"25%"}}>
      <div className="card-header" style={{ color: "green", fontWeight: "bolder" }}>Members</div>
      <div className="card-body">
        <h5 className="card-title">0</h5>
        <p className="card-text">Zero Members</p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="mt-6" style={{marginLeft:"28%"}}>
      <div className="mb-5">
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="fs-6">Total Profit</h5>
          <span>
            <span className="me-1 text-dark">0$</span>(0%)
          </span>
        </div>
        <div>
          <div style={{ height: 6 }} className="bg-light-primary progress">
            <div
              role="progressbar"
              className="progress-bar bg-primary"
              style={{ width: "8.6%" }}
              aria-valuenow="8.6"
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      </div>
      <div className="mb-5">
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="fs-6">Total Income</h5>
          <span>
            <span className="me-1 text-dark">0$</span>(0%)
          </span>
        </div>
        <div>
          <div style={{ height: 6 }} className="bg-light-info progress">
            <div
              role="progressbar"
              className="progress-bar bg-info"
              style={{ width: "86.4%" }}
              aria-valuenow="86.4"
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      </div>
      <div className="mb-5">
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="fs-6">Total Expenses</h5>
          <span>
            <span className="me-1 text-dark">0$</span>(0%)
          </span>
        </div>
        <div>
          <div style={{ height: 6 }} className="bg-light-danger progress">
            <div
              role="progressbar"
              className="progress-bar bg-danger"
              style={{ width: "74.5%" }}
              aria-valuenow="74.5"
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const data = [
  { month: "Feb", TotalIncome: 0, TotalExpense: 0 },
  { month: "Mar", TotalIncome: 0, TotalExpense: 0 },
  { month: "Apr", TotalIncome: 0, TotalExpense: 0 },
];

const RevenueChart = () => {
  return (
    <div style={{ width: "100%", maxWidth: "600px", marginLeft: "10%" }}>
      <h3>Revenue (+0% than last year)</h3>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="TotalIncome" stroke="#82ca9d" dot={{ r: 6 }} />
        <Line type="monotone" dataKey="TotalExpense" stroke="#ffc658" dot={{ r: 6 }} />
      </LineChart>
    </div>
  );
};

export default Sidebars;
