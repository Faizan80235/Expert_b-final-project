import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Full-screen Popup Component
function FullScreenPopup() {
  const [isVisible, setIsVisible] = useState(true);

  // Close popup after a delay or when user clicks the button
  const closePopup = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    // Close the popup automatically after 5 seconds (or customize)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  useEffect(() => {
    // Inject the responsive styles dynamically into the document's head
    const style = document.createElement("style");
    style.innerHTML = `
      @media (max-width: 768px) {
        .popupContent {
          width: 90%;
          padding: 25px;
        }

        .title {
          font-size: 24px;
        }

        .message {
          font-size: 16px;
        }

        .closeButton {
          padding: 12px 24px;
          font-size: 16px;
        }
      }

      @media (max-width: 576px) {
        .popupContent {
          width: 95%;
          padding: 20px;
        }

        .title {
          font-size: 22px;
        }

        .message {
          font-size: 14px;
        }

        .closeButton {
          padding: 10px 20px;
          font-size: 14px;
        }
      }
    `;
    document.head.appendChild(style);

    // Cleanup on component unmount
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  if (!isVisible) return null; // Don't render the popup if it's not visible

  return (
    <div style={styles.popupOverlay}>
      <div style={styles.popupContent}>
        <h2 style={styles.title}>Welcome to Our Website!</h2>
        <p style={styles.message}>Here’s a special promotion just for you!</p>
        <div style={styles.actions}>
          <button onClick={closePopup} style={styles.closeButton}>Close</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  popupOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    backdropFilter: "blur(10px)",
    overflow: "hidden",
  },
  popupContent: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "20px",
    textAlign: "center",
    width: "80%",
    maxWidth: "650px", // Ensures it doesn't grow too large on big screens
    minWidth: "300px", // Ensures it stays wide enough on small screens
    boxShadow: "0px 12px 40px rgba(0, 0, 0, 0.3)",
    border: "2px solid #007BFF",
    background: "linear-gradient(145deg, #f0f0f0, #d9d9d9)",
    transition: "transform 0.3s ease-in-out", // Smooth transform for scaling effect
  },
  title: {
    fontSize: "30px",
    fontWeight: "700",
    color: "#333",
    marginBottom: "15px",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
  message: {
    fontSize: "20px",
    color: "#555",
    marginBottom: "25px",
    lineHeight: "1.6",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  closeButton: {
    padding: "14px 28px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    fontSize: "18px",
    transition: "all 0.4s ease",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
    transform: "scale(1)",
    border: "2px solid #007BFF",
  },
};

export default FullScreenPopup;
