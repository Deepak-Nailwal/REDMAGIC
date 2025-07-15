import React from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import img1 from '../../assets/img/header.avif';
import img2 from '../../assets/img/phonws.webp';


const Header = () => {
  return (
    <header className="bg-dark text-white">
      <Container fluid>
        <Row className="align-items-center py-2">
          <Col xs={6} md={2}>
            <img className="img-fluid" src={img1} alt="Logo" style={{ height: "40px" }} />
          </Col>
          <Col xs={12} md={8}>
            <Navbar expand="lg" variant="dark">
              <Container fluid>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                  <Nav className="me-auto gap-3">
                    <NavDropdown title="Gaming Smartphone" id="nav-smartphone">
                      <NavDropdown.Item href="#"><img className="img-fluid bg-dark" src={img1} alt="phone" /></NavDropdown.Item>
                      <NavDropdown.Item href="#"><img className="img-fluid bg-dark" src={img2} alt="phone" /></NavDropdown.Item>
                      <NavDropdown.Divider />
                    </NavDropdown>

                    <NavDropdown title="Tablet" id="nav-tablet">
                      <NavDropdown.Item href="#"><img className="img-fluid bg-dark" src={img2} alt="phone" /></NavDropdown.Item>
                      <NavDropdown.Item href="#"><img className="img-fluid bg-dark" src={img2} alt="phone" /></NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="PC Gaming" id="nav-pcgaming">
                      <NavDropdown.Item href="#"><img className="img-fluid bg-dark" src={img2} alt="phone" /></NavDropdown.Item>
                      <NavDropdown.Item href="#"><img className="img-fluid bg-dark" src={img2} alt="phone" /></NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Store" id="nav-store">
                      <NavDropdown.Item href="#"></NavDropdown.Item>
                      <NavDropdown.Item href="#"><img className="img-fluid bg-dark" src={img2} alt="phone" /></NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="REDMAGIC Programs" id="nav-programs">
                      <NavDropdown.Item href="#">item1</NavDropdown.Item>
                      <NavDropdown.Item href="#">Item 2</NavDropdown.Item>
                       <NavDropdown.Item href="#">item1</NavDropdown.Item>
                      <NavDropdown.Item href="#">Item 2</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="#">Support</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
          <Col xs={6} md={2} className="d-flex ">
            <div className="d-flex align-items-center gap-5 text-white fs-5">
              <i className="bi bi-search"></i>
              <i className="bi bi-person-fill"></i>
              <i className="bi bi-cart"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
