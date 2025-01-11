import React from 'react'

import svg from '../images/pattern.svg';
import girl from '../images/girl-email.png';
import { Link } from 'react-router-dom';
function SubscriptionSection() {
  return (
    <div>
        
      {/* Subscription Section */}
      <section
        className="bg-dark"
        style={{
          background: `url(${svg})`,
          backgroundColor: '#001e2b',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="align-items-center row">
                <div className="col-md-6">
                  <div className="text-white mt-8 mt-lg-0">
                    <span>$30 discount for your first order</span>
                    <h2 className="h2 text-white my-4">
                      Get top deals, latest trends, and more.
                    </h2>
                    <p className="text-white-50">
                      Join our email subscription now to get updates on
                      promotions and coupons.
                    </p>
                    <div className="g-3 needs-validation row">
                      <div className="col-6">
                        <label
                          className="visually-hidden form-label"
                          htmlFor="emailAddress"
                        >
                          Email Address
                        </label>
                        <input
                          placeholder="Enter Email Address"
                          required
                          id="emailAddress"
                          className="form-control"
                          type="email"
                        />
                        <div className="invalid-feedback">Please enter email.</div>
                      </div>
                      <div className="col-auto">
                        <Link to="/Signup">
                          <button
                            type="submit"
                            className="mb-3 btn btn-primary"
                          >
                            Sign Up
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-5">
                  <div className="text-center">
                    <img
                      src={girl}
                      alt="Healthy cart"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SubscriptionSection