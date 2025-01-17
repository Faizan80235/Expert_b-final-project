
// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap'; // Bootstrap components for Navbar
// import { Link } from 'react-router-dom';
// import Carasuel from '../Carasuel';
// import Footer from '../Footer';
// import image1 from '../images/ad-banner-1.jpg';
// import image2 from '../images/ad-banner-2.jpg';
// import image3 from '../images/ad-banner-3.jpg';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import SubscriptionSection from './SubscriptionSection';
// import Sections from './Sections';
// import Navbars from '../Navbars';

// function About() {
//   return (
//     <div>
//   <Navbars></Navbars>
//       {/* Carousel Section */}
//       <Carasuel />

//       {/* Main Content */}
//       <Container style={{ marginTop: '5%' }}>
//         {/* Promotional Cards */}
//         <div className="row">
//           {[image1, image2, image3].map((image, index) => (
//             <div className="col-xl-4 col-lg-6 col-12" key={index}>
//               <div
//                 className="p-8 mb-3 rounded bg-cover bg-no-repeat"
//                 style={{
//                   background: `url(${image})`,
//                   padding: '6.5%',
//                   borderRadius: '5%',
//                 }}
//               >
//                 <div>
//                   <h3 className="mb-0 fw-bold">
//                     {index === 0 && '10% cashback on personal care'}
//                     {index === 1 && 'Say yes to season’s fresh'}
//                     {index === 2 && 'When in doubt, eat ice cream'}
//                   </h3>
//                   <div className="mt-4 mb-5 text-lg">
//                     <p className="fs-5 mb-0">
//                       {index === 0 && 'Max cashback: $12'}
//                       {index === 1 && 'Refresh your day the fruity way'}
//                       {index === 2 && 'Enjoy a scoop of summer today'}
//                     </p>
//                   </div>
//                   <a
//                     role="button"
//                     tabIndex={0}
//                     href="#"
//                     className="btn btn-dark"
//                     aria-label={`Shop now for ${
//                       index === 0
//                         ? 'personal care deals'
//                         : index === 1
//                         ? 'fresh seasonal products'
//                         : 'ice cream'
//                     }`}
//                   >
//                     Shop Now
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </Container>
// <SubscriptionSection></SubscriptionSection>
// <Sections></Sections>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

// export default About;
import React from 'react';
import { Navbar, Nav, Container, Row, Col, Card, Button } from 'react-bootstrap'; // Bootstrap components for Navbar
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
      <Navbars />
      
      {/* Carousel Section */}
      <Carasuel />

      {/* Main Content */}
      <Container style={{ marginTop: '5%' }} className="p-5">
        {/* Promotional Cards */}
        <div className="row g-4">
          {[image1, image2, image3].map((image, index) => (
            <div className="col-xl-4 col-lg-6 col-12" key={index}>
              <div
                className="p-4 mb-4 rounded bg-cover bg-no-repeat"
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

        {/* Feature Cards */}
        <h2 className="text-center mt-5 mb-4">Our Features</h2>
        <Row className="mt-4 g-4">
          <Col md={4}>
            <Card className="mb-4 p-4 shadow-sm">
              <Card.Body>
                <Card.Title>Fast Delivery</Card.Title>
                <Card.Text>
                  Get your orders delivered quickly with our fast and reliable service.
                </Card.Text>
                <Button variant="primary" href="#">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 p-4 shadow-sm">
              <Card.Body>
                <Card.Title>Quality Products</Card.Title>
                <Card.Text>
                  We provide top-quality products sourced from trusted suppliers.
                </Card.Text>
                <Button variant="primary" href="#">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 p-4 shadow-sm">
              <Card.Body>
                <Card.Title>24/7 Support</Card.Title>
                <Card.Text>
                  Our customer support team is available around the clock to .
                </Card.Text>
                <Button variant="primary" href="#">Contact Us</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Testimonial Section */}
        <h2 className="text-center mt-5 mb-4">What Our Customers Say</h2>
        <Row className="mt-4 g-4 mb-5"> {/* Added mb-5 to the row */}
          <Col md={4}>
            <div className="card p-3 text-center shadow-sm">
              <p className="blockquote">
                "Amazing service! I got my delivery within hours."
              </p>
              <footer className="blockquote-footer">John Doe</footer>
            </div>
          </Col>
          <Col md={4}>
            <div className="card p-3 text-center shadow-sm">
              <p className="blockquote">
                "Best products I've ever bought online. Highly recommend!"
              </p>
              <footer className="blockquote-footer">Jane Smith</footer>
            </div>
          </Col>
          <Col md={4}>
            <div className="card p-3 text-center shadow-sm">
              <p className="blockquote">
                "The customer support was great. They resolved my issue quickly."
              </p>
              <footer className="blockquote-footer">Anna Lee</footer>
            </div>
          </Col>
        </Row>

        {/* Subscription Section */}
        <SubscriptionSection />
        <Sections />

      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;
