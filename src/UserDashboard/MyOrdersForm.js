import React from 'react'


export const MyOrdersForm = () => (
    <div
      className="container collapse"
      id="myOrdersForm"
      data-bs-parent="#formGroup"
    >
      <div className="profile-container p-4 rounded shadow">
        <h2>My Orders</h2>
        <div>
          <div className="order-section mt-4">
            <h5>Order Status:</h5>
            <div className="row">
              <div className="col-md-3 col-6 mb-3">
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title">Cancelled</h5>
                    <p className="card-text">Your order has been cancelled.</p>
                    <button className="btn btn-secondary">View Details</button>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6 mb-3">
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title">Received</h5>
                    <p className="card-text">Your order has been received.</p>
                    <button className="btn btn-success">View Details</button>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6 mb-3">
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title">View Order</h5>
                    <p className="card-text">Click to view your order details.</p>
                    <button className="btn btn-info">View</button>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6 mb-3">
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title">Did Not Receive</h5>
                    <p className="card-text">You have not received your order.</p>
                    <button className="btn btn-warning">Report Issue</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );