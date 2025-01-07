import React, { useState } from "react";
import "./CategoryForm.css";

const CategoryForm = () => {
  const [status, setStatus] = useState("active");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="form-container ">
      <form onSubmit={handleSubmit} >
        {/* Category Image */}
        <div className="form-group mt-5">
          <label>Category Image</label>
          <input type="file" accept="image/*" />
        </div>

        {/* Category Information */}
        <div className="form-group">
          <label>Category Name</label>
          <input type="text" placeholder="Category Name" required />
        </div>

        <div className="form-group">
          <label>Slug</label>
          <input type="text" placeholder="Slug" required />
        </div>

        <div className="form-group">
          <label>Parent Category</label>
          <select>
            <option value="">Select Parent Category</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
          </select>
        </div>

        <div className="form-group">
          <label>Date</label>
          <input type="date" required />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea placeholder="Description" />
        </div>

        {/* Status */}
        <div className="form-group">
          <label>Status</label>
          <div className="radio-group">
            <div>
              <input
                type="radio"
                id="active"
                value="active"
                checked={status === "active"}
                onChange={() => setStatus("active")}
              />
              <label htmlFor="active">Active</label>
            </div>
            <div>
              <input
                type="radio"
                id="disabled"
                value="disabled"
                checked={status === "disabled"}
                onChange={() => setStatus("disabled")}
              />
              <label htmlFor="disabled">Disabled</label>
            </div>
          </div>
        </div>

        {/* Meta Data */}
        <div className="form-group">
          <label>Meta Title</label>
          <input type="text" placeholder="Meta Title" />
        </div>

        <div className="form-group">
          <label>Meta Description</label>
          <textarea placeholder="Meta Description" />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn-buy">Add Product</button>
      </form>
    </div>
  );
};

export default CategoryForm;