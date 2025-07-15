import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import img1 from '../../assets/img/col-6.webp';
import img2 from '../../assets/img/col-6-.webp';

const Section7 = () => {
  return (
    <div className="bg-dark py-5">
      <Container className="increase-size">
        <Row className="g-4">
          <Col xs={12} md={6}>
            <div className="position-relative">
              <img className="img-fluid w-100 rounded" src={img1} alt="XP Store 1" />
              <div className="position-absolute top-0 start-0 p-4  d-flex flex-column justify-content-center">
                <h4 className="text-white">REDMAGIC XP Store</h4>
                <p className="text-white">Earn, Redeem and Save with REDMAGIC XP</p>
                <Button variant="danger" className="mt-2">Join Now</Button>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className="position-relative">
              <img className="img-fluid w-100 rounded" src={img2} alt="XP Store 2" />
              <div className="position-absolute top-0 start-0 p-4 d-flex flex-column justify-content-center">
                <h4 className="text-white">REDMAGIC XP Store</h4>
                <p className="text-white">Earn, Redeem and Save with REDMAGIC XP</p>
                <Button variant="danger" className="mt-2 ">Join Now</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section7;
