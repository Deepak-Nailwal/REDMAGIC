import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Section5 = () => {
  return (
    <div className="bg-5 text-white py-5">
      <Container fluid="lg">
        <Row className="align-items-center">
          <Col xs={12} md={6} className="px-4 text-center text-md-start">
            <h1 className="fw-bold mb-3">
              REDMAGIC Cooler 6 <br className="d-none d-md-block" />
              Series
            </h1>
            <p className="text-danger fs-4 mb-2">10th Generation, Zero Limits</p>
            <p className="fs-4  text-dark mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quos doloremque!
              Voluptatibus nisi cumque.
            </p>
            <p className="fs-5 mb-3">
              Starting at <span className="fs-3 fw-semibold text-white">$649</span>
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">
              <Button variant="danger" className="px-5 py-2">Buy Now</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section5;
