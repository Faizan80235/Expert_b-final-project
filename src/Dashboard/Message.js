import React, { useState } from "react";
import "./styles.css";

const Message = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "General",
    message: "",
    recipient: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message sent:", formData);
    alert("Message sent successfully!");
    setFormData({
      title: "",
      category: "General",
      message: "",
      recipient: "",
    });
  };

  return (
    <div className="dashboard-container">
  
      <div className="main-area">
        
        <form onSubmit={handleSubmit} className="message-form">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter message title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="General">General</option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
          </select>

          <label htmlFor="recipient">Recipient</label>
          <input
            type="text"
            id="recipient"
            name="recipient"
            placeholder="Enter recipient name"
            value={formData.recipient}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn-send">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Message;
