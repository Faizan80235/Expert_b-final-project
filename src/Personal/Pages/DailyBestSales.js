import React from 'react'
import banner from "../images/banner-deal.jpg"
const DailyBestSales = () => {
  return (
    <div>
        <div className="container">
  <div className="row">
    <div className="mb-6 col-md-12">
      <h3 className="mb-0">Daily Best Sells</h3>
    </div>
  </div>
  <div className="table-responsive-xl pb-6">
    <div className="g-4 flex-nowrap row row-cols-lg-4 row-cols-md-2 row-cols-1">
      <div className="col">
        <div
          className="pt-8 px-6 px-xl-8 rounded"
          style={{
         background:`url(${banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 470
          }}
        >
          <div>
            <h3 className="fw-bold text-white">100% Organic Coffee Beans.</h3>
            <p className="text-white">Get the best deal before close.</p>
            <a className="btn btn-primary" href="">
              Shop Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ms-1"
              >
                <line x1={5} y1={12} x2={19} y2={12} />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card-product card">
          <div className="card-body">
            <div className="text-center position-relative">
              <a href="">
                <img
                  src="/images/products/product-img-11.jpg"
                  alt="Grocery Ecommerce Template"
                  className="mb-3 img-fluid"
                />
              </a>
              <div className="card-product-action d-flex gap-1 justify-content-center">
                <a className="btn-action" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width={14}
                    height={14}
                    fill="currentColor"
                    className="bi bi-eye"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </a>
                <a className="btn-action" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </a>
                <a className="btn-action" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width={14}
                    height={14}
                    fill="currentColor"
                    className="bi bi-arrow-left-right"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="text-small mb-1">
              <a className="text-decoration-none text-muted" href="#!">
                <small>Tea, Coffee &amp; Drinks</small>
              </a>
            </div>
            <h2 className="fs-6">
              <a className="text-inherit text-decoration-none" href="">
                Roast Ground Coffee
              </a>
            </h2>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                <span className="text-dark">$13.5 </span>
                <span className="text-decoration-line-through text-muted">
                  $18
                </span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <small className="text-warning">
                  <div className="d-flex gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width={12}
                      height={12}
                      fill="currentColor"
                      className="bi bi-star-fill text-warning"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width={12}
                      height={12}
                      fill="currentColor"
                      className="bi bi-star-fill text-warning"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width={12}
                      height={12}
                      fill="currentColor"
                      className="bi bi-star-fill text-warning"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width={12}
                      height={12}
                      fill="currentColor"
                      className="bi bi-star-fill text-warning"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width={12}
                      height={12}
                      fill="currentColor"
                      className="bi bi-star-half text-warning"
                    >
                      <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                    </svg>
                  </div>
                </small>
                <span>
                  <small>4.3</small>
                </span>
              </div>
            </div>
            <div className="d-grid mt-2">
              <a className="btn btn-primary" href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1={12} y1={5} x2={12} y2={19} />
                  <line x1={5} y1={12} x2={19} y2={12} />
                </svg>{" "}
                Add to cart
              </a>
            </div>
            <div className="d-flex justify-content-start text-center mt-3">
              <div className="deals-countdown w-100">
                <span className="countdown-section text-center">
                  <span className="countdown-amount hover-up">1367</span>
                  <span className="countdown-period"> days </span>
                </span>
                <span className="countdown-section text-center">
                  <span className="countdown-amount hover-up">23</span>
                  <span className="countdown-period"> hours </span>
                </span>
                <span className="countdown-section text-center">
                  <span className="countdown-amount hover-up">34</span>
                  <span className="countdown-period"> mins </span>
                </span>
                <span className="countdown-section text-center">
                  <span className="countdown-amount hover-up">36</span>
                  <span className="countdown-period"> sec </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card-product card">
          <div className="card-body">
            <div className="text-center position-relative">
              <a href="">
                <img
                  src="/images/products/product-img-12.jpg"
                  alt="Grocery Ecommerce Template"
                  className="mb-3 img-fluid"
                />
              </a>
              <div className="card-product-action d-flex gap-1 justify-content-center">
                <a className="btn-action" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width={14}
                    height={14}
                    fill="currentColor"
                    className="bi bi-eye"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </a>
                <a className="btn-action" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </a>
                <a className="btn-action" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width={14}
                    height={14}
                    fill="currentColor"
                    className="bi bi-arrow-left-right"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="text-small mb-1">
              <a className="text-decoration-none text-muted" href="#!">
                <small>Fruits &amp; Vegetables</small>
              </a>
            </div>
            <h2 className="fs-6">
              <a className="text-inherit text-decoration-none" href="">
                Crushed Tomatoes
              </a>
            </h2>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                <span className="text-dark">$13.5 </span>
                <span className="text-decoration-line-through text-muted">
                  $18
                </span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <small className="text-warning">
                  <div className="d-flex gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width={12}
                      height={12}
                      fill="currentColor"
                      className="bi bi-star-fill text-warning"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width={12}
                      height={12}
                      fill="currentColor"
                      className="bi bi-star-fill text-warning"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width={12}
                      height={12}
                      fill="currentColor"
                      className="bi bi-star-fill text-warning"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width={12}
                      height={12}
                      fill="currentColor"
                      className="bi bi-star-fill text-warning"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width={12}
                      height={12}
                      fill="currentColor"
                      className="bi bi-star-half text-warning"
                    >
                      <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                    </svg>
                  </div>
                </small>
                <span>
                  <small>4.3</small>
                </span>
              </div>
            </div>
            <div className="d-grid mt-2">
              <a className="btn btn-primary" href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1={12} y1={5} x2={12} y2={19} />
                  <line x1={5} y1={12} x2={19} y2={12} />
                </svg>{" "}
                Add to cart
              </a>
            </div>
            <div className="d-flex justify-content-start text-center mt-3">
              <div className="deals-countdown w-100">
                <span className="countdown-section text-center">
                  <span className="countdown-amount hover-up">1367</span>
                  <span className="countdown-period"> days </span>
                </span>
                <span className="countdown-section text-center">
                  <span className="countdown-amount hover-up">23</span>
                  <span className="countdown-period"> hours </span>
                </span>
                <span className="countdown-section text-center">
                  <span className="countdown-amount hover-up">34</span>
                  <span className="countdown-period"> mins </span>
                </span>
                <span className="countdown-section text-center">
                  <span className="countdown-amount hover-up">36</span>
                  <span className="countdown-period"> sec </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card-product card">
          <div className="card-body">
            <div className="text-center position-relative">
              <a href="">
                <img
                  src="/images/products/product-img-13.jpg"
                  alt="Grocery Ecommerce Template"
                  className="mb-3 img-fluid"
                />
              </a>
              <div className="card-product-action d-flex gap-1 justify-content-center">
                <a className="btn-action" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width={14}
                    height={14}
                    fill="currentColor"
                    className="bi bi-eye"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </a>
                <a className="btn-action" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </a>
                <a className="btn-action" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width={14}
                    height={14}
                    fill="currentColor"
                    className="bi bi-arrow-left-right"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="text-small mb-1">
              <a className="text-decoration-none text-muted" href="#!">
                <small>Fruits &amp; Vegetables</small>
              </a>
            </div>
            <h2 className="fs-6">
              <a className="text-inherit text-decoration-none" href="">
                Golden Pineapple
              </a>
            </h2>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                <span className="text-dark">$14.4 </span>
                <span className="text-decoration-line-through text-muted">
                  $18
                </span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <small className="text-warning">
                  <div className="d-flex gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width={12}
                      height={12}
                      fill="currentColor"
                      className="bi bi-star-fill text-warning"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width={12}
                      height={12}
                      fill="currentColor"
                      className="bi bi-star-fill text-warning"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width={12}
                      height={12}
                      fill="currentColor"
                      className="bi bi-star-fill text-warning"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width={12}
                      height={12}
                      fill="currentColor"
                      className="bi bi-star-fill text-warning"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width={12}
                      height={12}
                      fill="currentColor"
                      className="bi bi-star-half text-warning"
                    >
                      <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                    </svg>
                  </div>
                </small>
                <span>
                  <small>4.3</small>
                </span>
              </div>
            </div>
            <div className="d-grid mt-2">
              <a className="btn btn-primary" href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1={12} y1={5} x2={12} y2={19} />
                  <line x1={5} y1={12} x2={19} y2={12} />
                </svg>{" "}
                Add to cart
              </a>
            </div>
            <div className="d-flex justify-content-start text-center mt-3">
              <div className="deals-countdown w-100">
                <span className="countdown-section text-center">
                  <span className="countdown-amount hover-up">1367</span>
                  <span className="countdown-period"> days </span>
                </span>
                <span className="countdown-section text-center">
                  <span className="countdown-amount hover-up">23</span>
                  <span className="countdown-period"> hours </span>
                </span>
                <span className="countdown-section text-center">
                  <span className="countdown-amount hover-up">34</span>
                  <span className="countdown-period"> mins </span>
                </span>
                <span className="countdown-section text-center">
                  <span className="countdown-amount hover-up">36</span>
                  <span className="countdown-period"> sec </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default DailyBestSales