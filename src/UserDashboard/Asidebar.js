import React from "react";

export const Asidebar = () => (
  <aside className="col-md-3 col-12 sidebar p-3">
    <h5 className="mt-3">Hello "...."</h5>
    <nav className="nav flex-column">
      <a
        className="nav-link"
        data-bs-toggle="collapse"
        href="#profileForm"
        role="button"
        aria-expanded="false"
        aria-controls="profileForm"
     
      >
        My Profile
      </a>
      <a
        className="nav-link"
        data-bs-toggle="collapse"
        href="#manageProfileForm"
        role="button"
        aria-expanded="false"
        aria-controls="manageProfileForm"
      >
        Manage My Profile Details
      </a>
      <a
        className="nav-link"
        data-bs-toggle="collapse"
        href="#addressBookForm"
        role="button"
        aria-expanded="false"
        aria-controls="addressBookForm"
      >
        Address Book
      </a>
      <a
        className="nav-link"
        data-bs-toggle="collapse"
        href="#paymentOptionsForm"
        role="button"
        aria-expanded="false"
        aria-controls="paymentOptionsForm"
      >
        My Payment Options
      </a>
      <a
        className="nav-link"
        data-bs-toggle="collapse"
        href="#myOrdersForm"
        role="button"
        aria-expanded="false"
        aria-controls="myOrdersForm"
      >
        My Orders
      </a>
    </nav>
  </aside>
);


