import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Section2 = () => {
  return (
    <div className="bg-2 text-white py-5">
      <Container className="space-1" fluid="lg ">
        <Row className="align-items-center">
          <Col xs={12} md={6} className="px-4 text-center text-md-start">
            <h1 className="fw-bold mb-3 text-dark">REDMAGIC 10S Pro</h1>
            <p className="text-danger fs-4 mb-2">Unstoppable. Unbeatable. Undisputed.</p>
            <p className="fs-4 text-dark mb-3">
              Meet the REDMAGIC 10S Pro — our latest flagship built for peak performance
              and elite mobile gaming.
            </p>
            <p className="fs-5">
              Starting at <span className="fs-3 fw-semibold text-white">$649</span>
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

export default Section2;
