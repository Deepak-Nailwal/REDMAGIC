import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Section4 = () => {
  return (
    <div className="bg-4 text-white py-5">
      <Container className="space-1" fluid="lg">
        <Row className="align-items-center">
          <Col xs={12} md={6} className="px-4 text-center text-md-start">
            <h1 className="fw-bold mb-3 text-danger">REDMAGIC 10 Pro</h1>
            <p className="text-danger fs-4 mb-2">10th Generation, Zero Limits</p>
            <p className="fs-4 text-dark mb-3 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quos doloremque!
              Voluptatibus nisi cumque.
            </p>
            <p className="fs-5">
              Starting at <span className="fs-3 fw-semibold text-dark">$649</span>
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

export default Section4;
