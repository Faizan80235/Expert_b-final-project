import React, { useState } from "react";

function UserForm() {
    const [paymentMethod, setPaymentMethod] = useState("cod");
    const [billingAddress, setBillingAddress] = useState("same");
    const [showPopup, setShowPopup] = useState(false);

    const resetForm = () => {
        document.getElementById("checkout-form").reset();
        setPaymentMethod("cod");
        setBillingAddress("same");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        resetForm();
    };

    return (
        <div className="container">
            <div className="form-container" style={styles.formContainer}>
                <form id="checkout-form" onSubmit={handleSubmit}>
                    <h2 className="mb-4 text-center">Checkout</h2>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                        <div className="form-text">We'll email you updates and offers.</div>
                    </div>

                    <h4>Delivery</h4>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="first-name" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="first-name" placeholder="First name" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="last-name" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="last-name" placeholder="Last name" required />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="Add complete address & nearest landmark (at least 12 words)" required />
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="city" className="form-label">City</label>
                            <input type="text" className="form-control" id="city" placeholder="City" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="postal-code" className="form-label">Postal Code (Optional)</label>
                            <input type="text" className="form-control" id="postal-code" placeholder="Postal code" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="tel" className="form-control" id="phone" placeholder="Phone number" required />
                    </div>

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="save-info" />
                        <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
                    </div>

                    <h4>Payment</h4>
                    <div className="mb-3">
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="payment-method" 
                                id="cod" 
                                value="cod" 
                                checked={paymentMethod === "cod"} 
                                onChange={() => setPaymentMethod("cod")} 
                            />
                            <label className="form-check-label" htmlFor="cod">
                                Cash on Delivery (COD)
                            </label>
                        </div>
                    </div>

                    <h4>Billing Address</h4>
                    <div className="mb-3">
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="billing-address" 
                                id="same-address" 
                                value="same" 
                                checked={billingAddress === "same"} 
                                onChange={() => setBillingAddress("same")} 
                            />
                            <label className="form-check-label" htmlFor="same-address">
                                Same as shipping address
                            </label>
                        </div>
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="billing-address" 
                                id="different-address" 
                                value="different" 
                                checked={billingAddress === "different"} 
                                onChange={() => setBillingAddress("different")} 
                            />
                            <label className="form-check-label" htmlFor="different-address">
                                Use a different billing address
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mt-4">Place Order</button>
                </form>
            </div>

            {showPopup && (
                <div style={styles.popupOverlay} onClick={closePopup}>
                    <div style={styles.popupContent} onClick={(e) => e.stopPropagation()}>
                        <div style={styles.popupHeader}>
                            <h3 style={styles.popupTitle}>Order Confirmation</h3>
                            <button style={styles.popupCloseButton} onClick={closePopup}>&times;</button>
                        </div>
                        <div style={styles.popupBody}>
                            <p>Thank you for your order!</p>
                            <p><strong>Payment Method:</strong> Cash on Delivery</p>
                            <p><strong>Billing Address:</strong> {billingAddress === "same" ? "Same as shipping address" : "Different billing address"}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

const styles = {
    formContainer: {
        maxWidth: "900px",
        margin: "50px auto",
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    popupOverlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
    },
    popupContent: {
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
        width: "90%",
        maxWidth: "500px",
        position: "relative",
    },
    popupHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ddd",
        paddingBottom: "10px",
        marginBottom: "15px",
    },
    popupTitle: {
        margin: 0,
        fontSize: "1.8rem",
        fontWeight: "bold",
        color: "#333",
    },
    popupCloseButton: {
        background: "none",
        border: "none",
        fontSize: "1.5rem",
        cursor: "pointer",
        color: "#666",
    },
    popupBody: {
        fontSize: "1.2rem",
        color: "#444",
        textAlign: "center",
        lineHeight: "1.8",
        marginBottom: "20px",
    },
};

export default UserForm;
