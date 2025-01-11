import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import details from "../Personal/details";

export default function Products() {
  return (
    <div>
      <h1 className='text-center mt-3'>Popular Products</h1>
      <Container>
        <Row>
          {details.map((faizan) => {
            return <Items key={faizan.id} details={faizan}></Items>
          })}
        </Row>
      </Container>
    </div>
  );
}

function Items({ details }) {
  return (
    <Col lg="4" md="6" className="d-flex justify-content-center mb-4">
      <Card style={{ width: "18rem", minHeight: "350px" }} className='mt-5'>
        <Card.Body className="d-flex flex-column">
          <Card.Img variant="top" src={details.image} alt={details.ProductName} />
          <Card.Title className="mt-3">{details.ProductName}</Card.Title>
          <Card.Text className="flex-grow-1">{details.Imagedetails}</Card.Text>
          <Button variant="primary" href={details.link}>Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
