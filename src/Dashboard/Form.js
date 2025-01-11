import React from "react";

const Form = () => {
  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4">Product Information</h2>
      <form>
        <div className="form-group mb-3">
          <label htmlFor="product-name" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="product-name"
            placeholder="Product Name"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="category" className="form-label">Product Category</label>
          <select id="category" className="form-control">
            <option value="snacks">Snacks & Munchies</option>
            <option value="beverages">Beverages</option>
            <option value="dairy">Dairy Products</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="weight" className="form-label">Weight</label>
          <input
            type="number"
            className="form-control"
            id="weight"
            placeholder="Weight"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="unit" className="form-label">Unit</label>
          <select id="unit" className="form-control">
            <option value="kg">Kilograms</option>
            <option value="g">Grams</option>
            <option value="lbs">Pounds</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="product-images" className="form-label">Product Images</label>
          <div
            className="image-upload"
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
              style={{ display: "none" }}
              id="file-upload"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const imageUrl = URL.createObjectURL(file);
                  const previewImage = document.getElementById("image-preview");
                  previewImage.src = imageUrl;
                  previewImage.style.display = "block"; // Display the image
                }
              }}
            />
            <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
              <p>Drop files here to upload</p>
            </label>
            <div>
              <img
                id="image-preview"
                alt="Preview"
                style={{
                  display: "none", // Hidden initially
                  marginTop: "10px",
                  maxWidth: "100%",
                  maxHeight: "150px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="product-description" className="form-label">Product Descriptions</label>
          <textarea
            id="product-description"
            className="form-control"
            placeholder="Write descriptions here"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      
    </div>
  );
};

export default Form;
