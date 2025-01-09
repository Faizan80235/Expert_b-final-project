// FullScreenPopup.js
import React, { useState, useEffect } from "react";

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
    backgroundColor: "rgba(0, 0, 0, 0.85)", // Darker semi-transparent background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999, // Ensure it's above other content
    backdropFilter: "blur(10px)", // More intense blur for the background
    transition: "background-color 0.3s ease, backdrop-filter 0.3s ease", // Smooth transition for overlay fade-in
  },
  popupContent: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "20px", // More rounded corners for a modern feel
    textAlign: "center",
    width: "80%",
    maxWidth: "650px",
    boxShadow: "0px 12px 40px rgba(0, 0, 0, 0.3)", // Deeper shadow for depth
    border: "2px solid #007BFF", // Border to accentuate the popup
    background: "linear-gradient(145deg, #f0f0f0, #d9d9d9)", // Subtle gradient background
    transition: "transform 0.4s ease-in-out, box-shadow 0.3s ease-out", // Smooth zoom effect and shadow transition
    animation: "popupAnimation 0.4s ease-out", // Animating the popup appearance
  },
  title: {
    fontSize: "30px",
    fontWeight: "700",
    color: "#333",
    marginBottom: "15px",
    textTransform: "uppercase", // Adding uppercase effect for title
    letterSpacing: "2px", // Slight spacing between letters for better readability
  },
  message: {
    fontSize: "20px",
    color: "#555",
    marginBottom: "25px",
    lineHeight: "1.6", // Improved line height for better readability
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    gap: "20px", // Space between buttons
  },
  closeButton: {
    padding: "14px 28px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "50px", // Rounded button edges for modern appearance
    cursor: "pointer",
    fontSize: "18px",
    transition: "all 0.4s ease", // Smooth transition on hover
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // Soft shadow on button
    transform: "scale(1)", // Initial scale of button
    border: "2px solid #007BFF", // Border around button to make it stand out
  },
  closeButtonHover: {
    backgroundColor: "#0056b3",
    transform: "scale(1.1)", // Slight scale effect on hover for visual feedback
    boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.4)", // Enhanced shadow on hover
  },
  closeButtonFocus: {
    outline: "none",
    boxShadow: "0 0 0 4px rgba(0, 123, 255, 0.5)", // Focus ring when clicked
  },
};

// Optional keyframe animation for popup appearance (to make it pop-in)
const popupAnimation = `
  @keyframes popupAnimation {
    0% { opacity: 0; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1); }
  }
`;

export default FullScreenPopup;
