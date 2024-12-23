import React from 'react'
import details from './Aboutdetails'
import { Col, Card, Button, Row } from 'react-bootstrap'

function About() {
    return (
        <div>
            <Row>
                <h1 style={{ color: " darkgreen",textAlign:"center" }} className='mt-5' ><span style={{ color: "green" }}>DAILY PRODUCTS </span  > SALE</h1>
                {details.map((details) => {
                    return <Items details={details}></Items>
                })}
            </Row>

        </div>
    )
}


function Items({ details }) {
    return (

        <Col lg="4" md="6" className="mb-5   ">
            <Card style={{ width: "18rem", }} className='mt-5 ms-4'>
                <Card.Body>

                    <Card.Img variant="top" src={details.Productimage} />


                    <Card.Title>{details.Productname}</Card.Title>
                    <Card.Text>{details.Productdetails}</Card.Text>
                    <Button style={{ backgroundColor: "Green" }}> Add Cart</Button>
                </Card.Body>
            </Card>
        </Col>

    );


}
export default About