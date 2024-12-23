import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import image1 from '../Personal/images/slide-1.jpg';
import image2 from '../Personal/images/slide-2.jpg';

export default function Carousel() {
  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval={10000}>
          <div
            style={{
              background: `url(${image1}) center center / cover no-repeat`,
              borderRadius: "0.5rem",
              width: "100%",
              height: "90vh",
            }}
            className="carousel-item-content  img-fluid bg2"
          >
            <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
              <span className="badge text-bg-warning mt-5 ms-5">Opening Sale Discount 50%</span>
              <h2 className="text-dark display-5 fw-bold mt-4 ms-5">SuperMarket For Fresh Grocery</h2>
              <p className="lead ms-5">Introduced a new model for online grocery shopping and convenient home delivery.</p>
              <a href="#!" className="btn btn-dark mt-3 ms-5">
                Shop Now
                <i className="feather-icon icon-arrow-right ms-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval={10000}>
          <div
            style={{
              background: `url(${image2}) center center / cover no-repeat`,
              
              borderRadius: "0.5rem",
              width: "100%",
              height: "90vh",
            }}
            className="carousel-item-content  img-fluid bg2"
          >
            <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
              <span className="badge text-bg-warning mt-5 ms-5">Opening Sale Discount 50%</span>
              <h2 className="text-dark display-5 fw-bold mt-4 ms-5">SuperMarket For Fresh Grocery</h2>
              <p className="lead ms-5">Introduced a new model for online grocery shopping and convenient home delivery.</p>
              <a href="#!" className="btn btn-dark mt-3 ms-5">
                Shop Now
                <i className="feather-icon icon-arrow-right ms-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
