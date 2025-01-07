import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"; // Import styles

const Logout = () => {
  const [confirmLogout, setConfirmLogout] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session data (localStorage, sessionStorage, etc.)
    localStorage.clear();
    sessionStorage.clear();

    // Redirect to login page after logout
    navigate("/login");
  };

  return (
    <div className="logout-container">
      {confirmLogout ? (
        <>
          <p className="logout-message">Are you sure you want to log out?</p>
          <div className="logout-buttons">
            <button className="confirm" onClick={handleLogout}>
              Yes, Log Out
            </button>
            <button className="cancel" onClick={() => setConfirmLogout(false)}>
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="logout-message">You have successfully logged out.</p>
          <button className="confirm" onClick={() => navigate("/login")}>
            
            Go to Login
          </button>
        </>
      )}
    </div>
  );
};

export default Logout;
