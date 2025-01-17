import React from 'react'


export const ManageProfileForm = () => (
    <div
      className="container collapse"
      id="manageProfileForm"
      data-bs-parent="#formGroup"
    >
      <div className="profile-container p-4 rounded shadow">
        <h2>Manage My Profile Details</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="birthdate" className="form-label">
              Date of Birth
            </label>
            <input type="date" className="form-control" id="birthdate" />
          </div>
          <div className="mb-3">
            <label htmlFor="bio" className="form-label">
              Bio
            </label>
            <textarea
              className="form-control"
              id="bio"
              rows={3}
              placeholder="Write a short bio about yourself"
              defaultValue={""}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );