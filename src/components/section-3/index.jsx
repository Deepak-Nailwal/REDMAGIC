import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Section3 = () => {
  return (
    <div className="bg-3 text-white py-5">
      <Container className="space-1" fluid="lg">
        <Row className="align-items-center">
          <Col xs={12} md={6} className="px-4 text-center text-md-start">
            <h1 className="fw-bold mb-3 text-primary">REDMAGIC 10S Air</h1>
            <p className="text-danger fs-4 mb-2">Same Chill. Just Light</p>
            <p className="fs-4 mb-3 text-dark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quos doloremque! Voluptatibus nisi cumque.
            </p>
            <p className="fs-5 text-dark">
              Starting at <span className="fs-3 fw-semibold text-danger">$499</span>
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 mt-3 justify-content-center justify-content-md-start">
              <Button variant="danger" className="px-4 py-2">Buy Now</Button>
              <Button variant="outline-light" className="px-4 py-2">Learn More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section3;
