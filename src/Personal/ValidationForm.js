import React from 'react';
import { Link } from 'react-router-dom'; 
import Navbars from './Navbars'; // Assuming you have a Navbars component
import Footer from './Footer';

function ValidationForm() {

  function ValidationForm(event) {
    event.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    if (!name.value) {
      window.alert("Must be Filled Name");
      return;
    }

    if (!email.value) {
      alert("Please fill in the 'Email' field.");
      return;
    }

    if (!password.value) {
      alert("Please fill in the 'Password' field.");
      return;
    }
  }

  function ControlInput() {
    const name = document.getElementById('name');
    const submitButton = document.getElementById('submit');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    if (name.value !== "Faizan" || email.value !== "fa3031980@gmail.com" || !password.value) {
      submitButton.style.display = "none";
    } else {
      submitButton.style.display = "inline-block";
    }
  }

  return (
    <div >
      <Navbars />  
      
      <div className="container mt-5 p-4 bg-white rounded shadow-sm" style={{ maxWidth: '600px' }}>
        <h2 className="mb-4 text-center">Sign Up Form</h2>
        <form action="#" method="post">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter your name"
              onInput={ControlInput}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              onInput={ControlInput}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter your password"
              onInput={ControlInput}
            />
          </div>

          <button
            className="btn btn-primary w-100"
            onClick={ValidationForm} 
            id="submit"
            style={{ display: 'none' }}
          >
            <Link
              to="/Dashboard"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              Submit
            </Link>
          </button>
        </form>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer></Footer>
    </div>
  );
}

export default ValidationForm;
