
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'; // Bootstrap components for Navbar
import { Link } from 'react-router-dom';
import Carasuel from '../Carasuel';
import Footer from '../Footer';
import image1 from '../images/ad-banner-1.jpg';
import image2 from '../images/ad-banner-2.jpg';
import image3 from '../images/ad-banner-3.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import SubscriptionSection from './SubscriptionSection';
import Sections from './Sections';
import Navbars from '../Navbars';

function About() {
  return (
    <div>
  <Navbars></Navbars>
      {/* Carousel Section */}
      <Carasuel />

      {/* Main Content */}
      <Container style={{ marginTop: '5%' }}>
        {/* Promotional Cards */}
        <div className="row">
          {[image1, image2, image3].map((image, index) => (
            <div className="col-xl-4 col-lg-6 col-12" key={index}>
              <div
                className="p-8 mb-3 rounded bg-cover bg-no-repeat"
                style={{
                  background: `url(${image})`,
                  padding: '6.5%',
                  borderRadius: '5%',
                }}
              >
                <div>
                  <h3 className="mb-0 fw-bold">
                    {index === 0 && '10% cashback on personal care'}
                    {index === 1 && 'Say yes to season’s fresh'}
                    {index === 2 && 'When in doubt, eat ice cream'}
                  </h3>
                  <div className="mt-4 mb-5 text-lg">
                    <p className="fs-5 mb-0">
                      {index === 0 && 'Max cashback: $12'}
                      {index === 1 && 'Refresh your day the fruity way'}
                      {index === 2 && 'Enjoy a scoop of summer today'}
                    </p>
                  </div>
                  <a
                    role="button"
                    tabIndex={0}
                    href="#"
                    className="btn btn-dark"
                    aria-label={`Shop now for ${
                      index === 0
                        ? 'personal care deals'
                        : index === 1
                        ? 'fresh seasonal products'
                        : 'ice cream'
                    }`}
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
<SubscriptionSection></SubscriptionSection>
<Sections></Sections>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;
