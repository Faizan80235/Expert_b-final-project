import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LogoutBox = () => {
  const handleLogout = () => {
    // Simulate logout action here, for example:
    alert("Logged out successfully!");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card p-4 text-center">
            <h5 className="card-title">Are you sure you want to logout?</h5>
            <p className="card-text">Click below to logout from your account.</p>
            <button onClick={handleLogout} className="btn btn-danger">
              Logout
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default LogoutBox;
