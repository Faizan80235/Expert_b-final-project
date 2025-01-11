import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Message = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form
            className="card p-4"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = {
                title: e.target.title.value,
                category: e.target.category.value,
                recipient: e.target.recipient.value,
                message: e.target.message.value,
              };
              console.log("Message sent:", formData);
              alert("Message sent successfully!");
              e.target.reset(); // Reset the form after submission
            }}
          >
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Enter message title"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <select
                className="form-select"
                id="category"
                name="category"
                required
              >
                <option value="General">General</option>
                <option value="Support">Support</option>
                <option value="Feedback">Feedback</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="recipient" className="form-label">
                Recipient
              </label>
              <input
                type="text"
                className="form-control"
                id="recipient"
                name="recipient"
                placeholder="Enter recipient name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                placeholder="Write your message here"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Message;
