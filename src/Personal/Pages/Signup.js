import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from '../Footer';
import svg from '../images/signin-g (1).svg';
import Navbars from '../Navbars';

function Signup() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbars></Navbars>
      <Container
        style={{
          marginTop: '5%',
          marginBottom: '5%',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
        }}
      >
        <div className="row align-items-center">
          <div className="col-lg-6 text-center mb-4 mb-lg-0">
            <img src={svg} alt="Sign Up" className="img-fluid" style={{ maxWidth: '80%' }} />
          </div>
          <div className="col-lg-6">
            <h1 className="mb-4 h2 fw-bold text-center">Create Your Account</h1>
            <p className="text-center mb-4">Fill in the details to get started with FreshCart.</p>
            <form className="needs-validation">
              {/* Full Name */}
              <div className="mb-3">
                <label htmlFor="formSignupName" className="form-label visually-hidden">
                  Full Name
                </label>
                <input
                  placeholder="Full Name"
                  type="text"
                  id="formSignupName"
                  className="form-control"
                  name="name"
                  required
                />
              </div>
              {/* Email Address */}
              <div className="mb-3">
                <label htmlFor="formSignupEmail" className="form-label visually-hidden">
                  Email address
                </label>
                <input
                  placeholder="Email"
                  type="email"
                  id="formSignupEmail"
                  className="form-control"
                  name="email"
                  required
                />
              </div>
              {/* Password */}
              <div className="mb-3">
                <label htmlFor="formSignupPassword" className="form-label visually-hidden">
                  Password
                </label>
                <input
                  placeholder="Create a password"
                  type="password"
                  id="formSignupPassword"
                  className="form-control"
                  name="password"
                  required
                />
              </div>
              {/* Confirm Password */}
              <div className="mb-3">
                <label htmlFor="formSignupConfirmPassword" className="form-label visually-hidden">
                  Confirm Password
                </label>
                <input
                  placeholder="Confirm password"
                  type="password"
                  id="formSignupConfirmPassword"
                  className="form-control"
                  name="confirmPassword"
                  required
                />
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="flexCheckDefault"
                    className="form-check-input"
                  />
                  <label htmlFor="flexCheckDefault" className="form-check-label">
                    I agree to the terms and conditions
                  </label>
                </div>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
              <div className="text-center mt-3">
                Already have an account? <Link to="/Login">Sign In</Link>
              </div>
            </form>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Signup;
