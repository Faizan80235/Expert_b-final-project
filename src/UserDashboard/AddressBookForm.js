import React from 'react'


export const AddressBookForm = () => (
    <div
      className="container collapse"
      id="addressBookForm"
      data-bs-parent="#formGroup"
    >
      <div className="profile-container p-4 rounded shadow">
        <h2>Address Book</h2>
        <div>
          <form>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                placeholder="Enter full name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Enter address"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter phone number"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email address"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="birthday" className="form-label">
                Birthday
              </label>
              <input type="date" className="form-control" id="birthday" />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );