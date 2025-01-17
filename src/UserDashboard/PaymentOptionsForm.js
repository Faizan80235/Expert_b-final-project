import React from 'react'



export const PaymentOptionsForm = () => (
    <div
      className="container collapse"
      id="paymentOptionsForm"
      data-bs-parent="#formGroup"
    >
      <div className="profile-container p-4 rounded shadow">
        <form>
          <div className="mb-3">
            <label htmlFor="paymentMethod" className="form-label">
              Payment Method
            </label>
            <select
              className="form-select"
              id="paymentMethod"
              aria-label="Payment Method"
            >
              <option selected="">Select Payment Method</option>
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bankTransfer">Bank Transfer</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="cardNumber" className="form-label">
              Card Number
            </label>
            <input
              type="text"
              className="form-control"
              id="cardNumber"
              placeholder="Enter card number"
              maxLength={16}
            />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="expirationDate" className="form-label">
                Expiration Date
              </label>
              <input type="month" className="form-control" id="expirationDate" />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="cvv" className="form-label">
                CVV
              </label>
              <input
                type="text"
                className="form-control"
                id="cvv"
                placeholder="Enter CVV"
                maxLength={3}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="billingAddress" className="form-label">
              Billing Address
            </label>
            <input
              type="text"
              className="form-control"
              id="billingAddress"
              placeholder="Enter billing address"
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
          <button type="submit" className="btn btn-primary">
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );