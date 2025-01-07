import React, { useState } from "react";
import "./Style.css";

const Form = () => {
  const [image, setImage] = useState(null); // State to store the image file

  // Function to handle file drop
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0]; // Get the first file
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file)); // Store the image URL for preview
    }
  };

  // Function to handle file selection from input
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file)); // Store the image URL for preview
    }
  };

  return (
    <div className="form-container">
      <form>
        <h2>Product Information</h2>
        <div className="form-group">
          <label>Title</label>
          <input type="text" placeholder="Product Name" />
        </div>
        <div className="form-group">
          <label>Product Category</label>
          <select>
            <option value="snacks">Snacks & Munchies</option>
            <option value="beverages">Beverages</option>
            <option value="dairy">Dairy Products</option>
          </select>
        </div>
        <div className="form-group">
          <label>Weight</label>
          <input type="number" placeholder="Weight" />
        </div>
        <div className="form-group">
          <label>Unit</label>
          <select>
            <option value="kg">Kilograms</option>
            <option value="g">Grams</option>
            <option value="lbs">Pounds</option>
          </select>
        </div>
        <div className="form-group">
          <label>Product Images</label>
          <div
            className="image-upload"
            onDrop={handleDrop} // Handle drop event
            onDragOver={(e) => e.preventDefault()} // Allow drop
            style={{
              border: "2px dashed #ccc",
              padding: "20px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange} // Handle file input change
              style={{ display: "none" }}
              id="file-upload"
            />
            <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
            <p>Drop files here to upload</p>
          
            </label>
            {image && (
              <div>
                <img
                  src={image}
                  alt="Preview"
                  style={{ marginTop: "10px", maxWidth: "100%", maxHeight: "150px" }}
                />
              </div>
            )}
          </div>
        </div>
        <div className="form-group">
          <label>Product Descriptions</label>
          <textarea placeholder="Write descriptions here"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
