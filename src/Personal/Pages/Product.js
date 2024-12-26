import React from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import details from "../Aboutdetails"
export default function Products() {
  return (
    <div>
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
        <Card.Img variant="top" src={details.Productimage} alt="details" />
        <Card.Title>{details.Productname}</Card.Title>
        <Card.Text>{details.Productdetails}</Card.Text>
        <Button variant="primary" href={details.link}>+Add</Button>
      </Card.Body>
    </Card>
  </Col>

  );


}
