
import React from 'react';
import Navbars from '../Navbars';
import Footer from '../Footer';

const Contact = () => {
  return (
    
    <div className="">
      <Navbars></Navbars>
      <div className="row justify-content-center mt-5">
        <div className="col-lg-8 col-md-10">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body">
              <h2 className="text-center mb-4 text-primary font-weight-bold">Get in Touch</h2>
              <p className="text-center mb-4 text-muted">Have any questions or need support? Reach out to us, and we'll get back to you as soon as possible.</p>
              
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label text-dark">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="form-control form-control-lg shadow-sm"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label text-dark">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg shadow-sm"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label text-dark">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="form-control form-control-lg shadow-sm"
                    placeholder="Subject of your message"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-dark">Message</label>
                  <textarea
                    id="message"
                    className="form-control form-control-lg shadow-sm"
                    rows="4"
                    placeholder="Write your message here"
                    required
                  ></textarea>
                </div>
                
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary btn-lg shadow-sm">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
