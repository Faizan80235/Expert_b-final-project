
// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
// import Footer from '../Footer';
// import svg from '../images/signin-g (1).svg';

// function Login() {
//     return (
//         <div style={{ marginLeft: "5%" }}>
//             <Container>
//             <img src={svg} alt="Sign In" className="img-fluid" style={{ maxWidth: '80%' }} />

//                 <div className="col-lg-4 col-md-6 col-12 order-lg-2 offset-lg-1 order-1" style={{ marginLeft: '5%', marginTop: '5%',float:"inline-start"}}>
                   

//                     <path d="M197 336.917C281.381 336.917 349.785 332.924 349.785 327.997C349.785 323.071 281.381 319.077 197 319.077C112.619 319.077 44.2148 323.071 44.2148 327.997C44.2148 332.924 112.619 336.917 197 336.917Z" fill="#F4F6F8" />
//                     <div className="mb-lg-9 mb-5">
//                         <h1 className="mb-1 h2 fw-bold">Sign in to FreshCart</h1>
//                         <p>Welcome back to FreshCart! Enter your email to get started.</p>
//                     </div>
//                     <form className="needs-validation">
//                         <div className="g-3 row">
//                             <div className="col-12">
//                                 <label className="visually-hidden form-label" htmlFor="formSigninEmail">
//                                     Email address
//                                 </label>
//                                 <input
//                                     placeholder="Email"
//                                     type="email"
//                                     id="formSigninEmail"
//                                     className="form-control"
//                                     name="email"
//                                 />
//                             </div>
//                             <div className="col-12">
//                                 <div className="password-field position-relative">
//                                     <label
//                                         className="visually-hidden form-label"
//                                         htmlFor="formSigninPassword"
//                                     >
//                                         Password
//                                     </label>
//                                     <div className="password-field position-relative">
//                                         <input
//                                             placeholder="*****"
//                                             type="password"
//                                             id="formSigninPassword"
//                                             className="fakePassword form-control"
//                                             name="password"
//                                         />
//                                         <span>
//                                             <svg
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 viewBox="0 0 16 16"
//                                                 width="1em"
//                                                 height="1em"
//                                                 fill="currentColor"
//                                                 className="bi bi-eye-slash passwordToggler"
//                                             >
//                                                 <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
//                                                 <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
//                                                 <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
//                                             </svg>
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="d-flex justify-content-between">
//                                 <div className="form-check">
//                                     <input
//                                         type="checkbox"
//                                         id="flexCheckDefault"
//                                         className="form-check-input"
//                                         defaultValue=""
//                                     />
//                                     <label htmlFor="flexCheckDefault" className="form-check-label">
//                                         Remember me
//                                     </label>
//                                 </div>
//                                 <div>
//                                     Forgot password?<a > Reset It</a>
//                                 </div>
//                             </div>
//                             <div className="d-grid col-12">
//                                 <button type="submit" className="btn btn-primary">
//                                     Sign In
//                                 </button>
//                             </div>
//                             <div>
//                                 Don’t have an account?<Link to="/Signup"> Sign Up</Link>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </Container>
//             <div style={{marginTop:"4%"}}>
//             <br />
//             <br />
//             <br />
          
//             </div>
//             <Footer></Footer>

//         </div>

//         )
//     }

// export default Login
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../Footer';
import svg from '../images/signin-g (1).svg';
import Navbars from '../Navbars';

function Login() {
    return (
        <div style={{  }}>
            <Navbars></Navbars>
            <Container className="my-5">
                <Row className="align-items-center">
                    <Col lg={6} className="text-center mb-4 mb-lg-0">
                        <img src={svg} alt="Sign In" className="img-fluid" style={{ maxWidth: '80%' }} />
                    </Col>

                    <Col lg={6}>
                        <div className="mb-5">
                            <h1 className="h2 fw-bold">Login to FreshCart</h1>
                            <p>Welcome back! Please enter your credentials to access your account.</p>
                        </div>
                        <form className="needs-validation">
                            <div className="mb-3">
                                <label className="visually-hidden form-label" htmlFor="formSigninEmail">
                                    Email address
                                </label>
                                <input
                                    placeholder="Email"
                                    type="email"
                                    id="formSigninEmail"
                                    className="form-control"
                                    name="email"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <div className="password-field position-relative">
                                    <label className="visually-hidden form-label" htmlFor="formSigninPassword">
                                        Password
                                    </label>
                                    <input
                                        placeholder="*****"
                                        type="password"
                                        id="formSigninPassword"
                                        className="form-control"
                                        name="password"
                                        required
                                    />
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            className="bi bi-eye-slash passwordToggler"
                                        >
                                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                                            <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between mb-3">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        id="flexCheckDefault"
                                        className="form-check-input"
                                    />
                                    <label htmlFor="flexCheckDefault" className="form-check-label">
                                        Remember me
                                    </label>
                                </div>
                                <div>
                                    Forgot password?<a href="#"> Reset It</a>
                                </div>
                            </div>

                            <div className="d-grid col-12 mb-3">
                                <button type="submit" className="btn btn-primary">
                                    Log In
                                </button>
                            </div>

                            <div className="text-center">
                                Don't have an account?<Link to="/Signup"> Sign Up</Link>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>

            <div style={{ marginTop: "4%" }}>
                <br />
                <br />
                <br />
            </div>

            <Footer />
        </div>
    );
}

export default Login;
