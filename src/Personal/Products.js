import React from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import details from "../Personal/details"
export default function Products() {
  return (
    <div>
      <h1 className='text-center mt-3'>Popular Products</h1>
      <Container>
        <Row>
          {details.map((faizan) => {
            return <Items details={faizan}></Items>
          })}
        </Row>
      </Container>
    </div>
  )
}
function Items({ details }) {
  return (
    <Col lg="4" md="6 " className="">
    <Card style={{ width: "18rem" ,height:"2erm"}} className='mt-5 ms-5 mb-2'>
      <Card.Body>
        <Card.Img variant="top" src={details.image} alt={details.ProductName} />
        <Card.Title>{details.ProductName}</Card.Title>
        <Card.Text>{details.Imagedetails}</Card.Text>
        <Button variant="primary" href={details.link}>Go somewhere</Button>
      </Card.Body>
    </Card>
  </Col>

  );


}
