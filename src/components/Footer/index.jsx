import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../../assets/img/header.avif';

const FooterMenu = () => {
    return (
        <div className="bg-dark text-white py-5">
            <Container fluid>
                <Row className="mb-4">
                    <Col xs={12} md={6} className="text-center text-md-start mb-4 mb-md-0">
                        <img className='img-fluid w-25' src={img1} alt="REDMAGIC" />
                        <h2>REDMAGIC <br />Win More Games</h2>
                    </Col>
                    <Col xs={12} md={6}>
                        <Row>
                            {[
                                {
                                    title: "REDMAGIC Phones",
                                    items: [
                                        "REDMAGIC 10S Pro", "REDMAGIC 10 Air", "REDMAGIC 10 Pro",
                                        "Golden Saga Edition", "Phone Bundles", "Gaming Accessories"
                                    ]
                                },
                                {
                                    title: "Tablet",
                                    items: ["REDMAGIC Astra", "REDMAGIC Nova", "Tablet Accessories"]
                                },
                                {
                                    title: "PC Gaming",
                                    items: ["4K Monitor", "Mechanical Keyboard", "Gaming Mouse", "Mouse Pad"]
                                },
                                {
                                    title: "REDMAGIC Program",
                                    items: ["XP Store", "Refer a Friend", "Education Discount", "Smartcast Studio", "Cloud Driver"]
                                },
                                {
                                    title: "Partnership",
                                    items: ["Affiliate", "Influencer", "Press Inquiry", "Sales Partner"]
                                },
                                {
                                    title: "Support",
                                    items: ["Contact Us", "FAQs", "Track Order", "Returns", "Software Updates", "Feedback"]
                                }
                            ].map((section, index) => (
                                <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                                    <h5>{section.title}</h5>
                                    <ul className="list-unstyled">
                                        {section.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>

                {/* Social & Contact */}
                <Row className="mt-5">
                    <Col xs={12} md={6} className="mb-4 mb-md-0">
                        <ul className='d-flex flex-wrap gap-4 justify-content-center justify-content-md-start'>
                            <li className='list-unstyled'><a className='text-danger fs-2' href="#"><i className="bi bi-facebook"></i></a></li>
                            <li className='list-unstyled'><a className='text-danger fs-2' href="#"><i className="bi bi-twitter-x"></i></a></li>
                            <li className='list-unstyled'><a className='text-danger fs-2' href="#"><i className="bi bi-instagram"></i></a></li>
                            <li className='list-unstyled'><a className='text-danger fs-2' href="#"><i className="bi bi-youtube"></i></a></li>
                            <li className='list-unstyled'><a className='text-danger fs-2' href="#"><i className="bi bi-reddit"></i></a></li>
                            <li className='list-unstyled'><a className='text-danger fs-2' href="#"><i className="bi bi-discord"></i></a></li>
                        </ul>
                        <ul className='d-flex flex-column flex-md-row gap-2 mt-3'>
                            <li className='list-unstyled'>+91-87584787489, +91-4878789</li>
                            <li className='list-unstyled'>Mon–Sun, 9am–6pm EST</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={6}>
                        <ul className='d-flex flex-wrap justify-content-center justify-content-md-end gap-3'>
                            {[...Array(7)].map((_, i) => (
                                <li key={i} className='list-unstyled'>
                                    <a className='fs-1 text-white' href="#"><i className="bi bi-credit-card-fill"></i></a>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>

                <div className='mt-4' style={{ borderTop: '1px solid #555' }}></div>
            </Container>
        </div>
    );
};

export default FooterMenu;
