import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from '../../../assets/img/phonws.webp'
import img2 from '../../../assets/img/phonee.webp'
import img3 from '../../../assets/img/cover.webp'
import img4 from '../../../assets/img/10_pro.webp'

const Page2 = () => {
    return (
        <>
            <Container className="bg-dark">
                <Row>
                  <Col md={3}>
                <div>
                    <img className="img-fluid" src={img1} alt="img" />
                    <p className="text-white">REDMAGIC 10S pro</p>
                </div>
                  </Col>
                  <Col md={3}>
                   <div>
                    <img className="img-fluid " src={img2} alt="img" />
                     <p className="text-white">REDMAGIC 10S pro</p>
                </div>
                  </Col>
                  <Col md={3}>
                   <div>
                    <img className="img-fluid " src={img3} alt="img" />
                     <p className="text-white">REDMAGIC 10S pro</p>
                </div>
                  </Col>
                  <Col md={3}>
                 <div>
                    <img className="img-fluid " src={img4} alt="img" />
                         <p className="text-white">REDMAGIC 10S pro</p> 
                </div>
                  </Col>

                </Row>
            </Container>
        </>
    )
}

export default Page2;

