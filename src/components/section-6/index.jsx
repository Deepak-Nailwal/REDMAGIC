import React from "react";
import { Container, Col, Row, Button, Tab, Tabs, Card } from "react-bootstrap";
import img1 from '../../assets/img/console.webp';
import img2 from '../../assets/img/typeC.webp';

const Section6 = () => {
  const cardData = [
    { img: img1, title: "Gamepad 2", price: "$94.90" },
    { img: img2, title: "Gamepad 2", price: "$94.90" },
    { img: img1, title: "Gamepad 2", price: "$94.90" },
    { img: img2, title: "Gamepad 2", price: "$94.90" },
  ];

  return (
    <div className="bg-black py-5">
      <Container fluid="lg">
        <Row className="align-items-center mb-4">
          <Col xs={12} md={6}>
            <p className="fw-bold fs-2 text-white text-center text-md-start mb-3 mb-md-0">
              Explore More Accessories
            </p>
          </Col>
          <Col xs={12} md={6}>
            <Tabs
              defaultActiveKey="profile"
              id="accessories-tabs"
              className="mb-3 justify-content-center justify-content-md-end"
              justify
            >
              <Tab eventKey="home" title="Best Sellers" />
              <Tab eventKey="profile" title="The Latest" />
              <Tab eventKey="tab" title="Recommended" />
            </Tabs>
          </Col>
        </Row>

        <Row className="g-4">
          {cardData.map((card, idx) => (
            <Col xs={12} sm={6} md={3} key={idx}>
              <Card className="bg-dark text-white h-100">
                <Card.Img variant="top" src={card.img} />
                <Card.Body>
                  <Card.Title className="h6 mb-2 text-white">
                    REDMAGIC Shadow Blade {card.title}
                  </Card.Title>
                  <Card.Text className="text-white">
                    Enhanced grip design for a more comfortable and console-like gaming experience.
                  </Card.Text>
                  <p className="text-white">{card.price}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="d-flex justify-content-center mt-5">
          <Button variant="outline-light" className="px-4 py-2">
            View all <span role="img" aria-label="arrows">👉🏻👉🏻</span>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Section6;
