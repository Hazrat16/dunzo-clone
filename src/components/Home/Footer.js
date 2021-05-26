import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer mt-5">
            <section className="topFooter pt-5 pb-5">
                <h6>You can’t stop time, but you can save it!</h6>
                <small>Living in the city, there is never enough time to shop for groceries, pick-up supplies, grab food and wade through traffic on the way back home. How about we take care of all of the above for you? What if we can give you all that time back? Send packages across the city and get everything from food, groceries, medicines and pet supplies delivered right to your doorstep. From any store to your door, just make a list and we’ll make it disappear. Just Dunzo It!</small>
            </section>
            <svg width="900" height="30" xmlns="http://www.w3.org/2000/svg">
                <path d="M 10 10 L 7000 10" stroke="#fff" />
            </svg>
            <section className="bottomFooter pt-5 pb-5">
                <Container>
                    <Row>
                        <Col sm={2} style={{ textAlign: 'end' }}>
                            <img src="https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-footer-a7423f59ce95bf41719960ee8314ff2d.png" alt="" style={{ width: "80px" }} />
                        </Col>
                        <Col sm={2} className="contactLink">
                            <h6>DUNZO</h6>
                            <a href="/home" className="link">About </a>
                            <a href="/home" className="link">Jobs </a>
                            <a href="/home" className="link">Contact </a>
                            <a href="/home" className="link">Terms and Conditions </a>
                            <a href="/home" className="link">Privacy Policy </a>
                            <a href="/home" className="link">Dunzo for Partner </a>
                            <a href="/home" className="link">Dunzo for Business </a>
                        </Col>
                        <Col sm={2} className="contactLink">
                            <h6>SURVICIBLE CITIES</h6>
                            <a href="/home" className="link">Bangalore</a>
                            <a href="/home" className="link">Pune</a>
                            <a href="/home" className="link">Gurgaon</a>
                            <a href="/home" className="link">Hydrabad</a>
                            <a href="/home" className="link">New Delhi</a>
                            <a href="/home" className="link">Chennai</a>
                            <a href="/home" className="link">Mumbai</a>
                        </Col>
                        <Col sm={2} className="contactLink">
                            <h6>SURVICIBLE CITIES</h6>
                            <a href="/home" className="link">Email</a>
                            <a href="/home" className="link">Twitter</a>
                            <a href="/home" className="link">Facebook</a>
                            <a href="/home" className="link">Instagram</a>
                            <a href="/home" className="link">LinkedIn</a>
                        </Col>
                        <Col sm={2}>
                            <img src="https://resources.dunzo.com/web-assets/prod/_next/static/images/footer-mascot-37512998a23e1abed75aa6c883d8f0a1.png" alt="" 
                            style={{width:"250px"}}/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Footer;