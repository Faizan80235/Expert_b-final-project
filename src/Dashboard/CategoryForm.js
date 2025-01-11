import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CategoryForm = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted!");
            }}
            className="card p-4"
          >
            {/* Category Image */}
            <div className="mb-3">
              <label className="form-label">Category Image</label>
              <input type="file" className="form-control" accept="image/*" />
            </div>

            {/* Category Information */}
            <div className="mb-3">
              <label className="form-label">Category Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Category Name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Slug</label>
              <input type="text" className="form-control" placeholder="Slug" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Parent Category</label>
              <select className="form-select">
                <option value="">Select Parent Category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Date</label>
              <input type="date" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea className="form-control" placeholder="Description" />
            </div>

            {/* Status */}
            <div className="mb-3">
              <label className="form-label">Status</label>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="active"
                  value="active"
                />
                <label className="form-check-label" htmlFor="active">
                  Active
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="disabled"
                  value="disabled"
                />
                <label className="form-check-label" htmlFor="disabled">
                  Disabled
                </label>
              </div>
            </div>

            {/* Meta Data */}
            <div className="mb-3">
              <label className="form-label">Meta Title</label>
              <input type="text" className="form-control" placeholder="Meta Title" />
            </div>

            <div className="mb-3">
              <label className="form-label">Meta Description</label>
              <textarea className="form-control" placeholder="Meta Description" />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default CategoryForm;
