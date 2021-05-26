import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const TopPicks = () => {
    return (
        <div>
            <section className="top-pick mt-5 pb-5" style={{paddingLeft: '130px', paddingRight: '130px' }}>
                <h2>Top picks for you</h2>
                <svg width='64px' height='7px' style={{fill:'#25D366',display:'block',stroke:'#25D366',strokeWidth:'5',opacity:'1',viewBox:'0 0 57 4'}}>
                    <rect width="39" height="4" rx="2" />
                    <rect x="50" width="20" height="4" rx="2" />
                </svg>
                <Container className='mt-5'>
                    <Row>
                        <Col sm={3}>
                            <img className="card-img-top" src="https://ik.imagekit.io/dunzo/web-assets/images/d4b.jpg?tr=w-488,h-326,cm-pad_resize" alt="" />
                        </Col>
                        <Col sm={3}>
                            <img className="card-img-top" src="https://ik.imagekit.io/dunzo/web-assets/images/grocery.jpg?tr=w-488,h-326,cm-pad_resize" alt="" />
                        </Col>
                        <Col sm={3}>
                            <img className="card-img-top" src="https://ik.imagekit.io/dunzo/web-assets/images/restaurants.jpg?tr=w-488,h-326,cm-pad_resize" alt="" />
                        </Col>
                        <Col sm={3}>
                            <img className="card-img-top" src="https://ik.imagekit.io/dunzo/web-assets/images/send-packages.jpg?tr=w-488,h-326,cm-pad_resize" alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default TopPicks;