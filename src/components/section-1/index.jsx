import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Section1 = () => {
  return (
    <div className="bg-1 py-5">
      <Container className="space-1" fluid="lg ">
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center text-md-start px-4">
            <h1 className="text-dark fw-bold mb-3">
              REDMAGIC ASTRA <br className="d-none d-md-block" />
              Gaming Tablet
            </h1>
            <p className="text-danger fs-2">Unlock $30 off for only $1</p>
            <p className="text-dark fs-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem sunt,
              odit non deserunt maxime consequatur consequuntur temporibus quibusdam
              dignissimos.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 mt-3 justify-content-center justify-content-md-start">
              <Button variant="danger" className="px-4 py-2">Secure Now</Button>
              <Button variant="outline-light" className="px-4 py-2">Learn More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section1;
