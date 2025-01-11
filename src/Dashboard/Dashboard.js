import React, { useState } from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../Personal/images/slider-image-1.jpg';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Main Content */}
      <div className="flex-grow-1">
        <nav className="navbar navbar-light bg-light d-lg-none">
          <button className="btn" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} className="text-dark" />
          </button>
        </nav>
        <div className="container-fluid mt-4">
          {/* Content Here */}
          <Carasuel />
          <div className="row mt-4">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <StateCard title="Earning" value="0$" text="Zero Dollar Profit" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <StateCard title="Customers" value="0" text="Zero Customers" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <StateCard title="Members" value="0" text="Zero Members" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6 col-12">
              <Card />
            </div>
            <div className="col-lg-6 col-12">
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
      className="rounded-4 d-flex align-items-center"
      style={{
        background: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '300px',
        padding: '20px',
        color: '#000',
      }}
    >
      <div style={{ maxWidth: '400px' }}>
        <h1 className="fw-bold">Welcome back! HEALTHY-CART TO FAIZAN</h1>
        <p>FreshCart is simple & clean design for developers and designers.</p>
        <Link to="/ProductForm">
          <button className="btn btn-success">
            Create Product
          </button>
        </Link>
      </div>
    </div>
  );
}

function StateCard({ title, value, text }) {
  return (
    <div className="card text-center shadow-sm">
      <div className="card-header" style={{ color: 'green', fontWeight: 'bold' }}>
        {title}
      </div>
      <div className="card-body">
        <h5 className="card-title">{value}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="card shadow-sm">
      <div className="card-header">Total Profit</div>
      <div className="card-body">
        <p>Profit: 0$</p>
        <div className="progress">
          <div className="progress-bar bg-success" style={{ width: '50%' }}></div>
        </div>
      </div>
    </div>
  );
}

const data = [
  { month: 'Feb', TotalIncome: 0, TotalExpense: 0 },
  { month: 'Mar', TotalIncome: 0, TotalExpense: 0 },
  { month: 'Apr', TotalIncome: 0, TotalExpense: 0 },
];

const RevenueChart = () => {
  return (
    <div className="card shadow-sm p-3">
      <h3 className="mb-3">Revenue (+0% than last year)</h3>
      <LineChart width={400} height={300} data={data}> {/* Adjusted width */}
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="TotalIncome" stroke="#82ca9d" />
        <Line type="monotone" dataKey="TotalExpense" stroke="#ffc658" />
      </LineChart>
      
    </div>
  );
};

export default Dashboard;
