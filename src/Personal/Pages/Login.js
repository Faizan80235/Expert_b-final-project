import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Footer";
import svg from "../images/signin-g (1).svg";
import Navbars from "../Navbars";

function Login() {
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });

    const [loginType, setLoginType] = useState("user"); // Default to user login

    function Handelchange(e) {
        const { name, value } = e.target;
        console.log(name, value);

        const copySignupinfo = { ...login }; // Correct state variable
        copySignupinfo[name] = value;
        setLogin(copySignupinfo);
        console.log(copySignupinfo);
   console.log(setLogin)

    }
    const handleLoginTypeChange = (e) => {
        setLoginType(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login.email === "" || login.password === "") {
            alert("Please fill in all fields");
            return;
        }
        if (loginType === "admin") {
            alert("Logging in as Admin");
            console.log("Admin Login:", login);
        } else {
            alert("Logging in as User");
            console.log("User Login:", login);
        }
    };

    return (
        <div>
            <Navbars />
            <Container className="my-5">
                <Row className="align-items-center">
                    <Col lg={6} className="text-center mb-4 mb-lg-0">
                        <img src={svg} alt="Sign In" className="img-fluid" style={{ maxWidth: "80%" }} />
                    </Col>

                    <Col lg={6}>
                        <div className="mb-5">
                            <h1 className="h2 fw-bold">Login to FreshCart</h1>
                            <p>Welcome back! Please enter your credentials to access your account.</p>
                        </div>
                        <form className="needs-validation" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="loginType">
                                    Login as
                                </label>
                                <select
                                    id="loginType"
                                    className="form-select"
                                    value={loginType}
                                    onChange={handleLoginTypeChange}
                                >
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="formSigninEmail" className="form-label">
                                    Email address
                                </label>
                                <input
                                    placeholder="Email"
                                    type="email"
                                    id="formSigninEmail"
                                    className="form-control"
                                    name="email"
                                    value={login.email}
                                    onChange={Handelchange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="formSigninPassword" className="form-label">
                                    Password
                                </label>
                                <input
                                    placeholder="*****"
                                    type="password"
                                    id="formSigninPassword"
                                    className="form-control"
                                    name="password"
                                    value={login.password}
                                    onChange={Handelchange}
                                    required
                                />
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
                            </div>

                            <div className="d-grid col-12 mb-3">
                                <button type="submit" className="btn btn-primary">
                                    Log In
                                </button>
                            </div>

                            <div className="text-center">
                                Don't have an account? <Link to="/Signup">Sign Up</Link>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    );
}

export default Login;
