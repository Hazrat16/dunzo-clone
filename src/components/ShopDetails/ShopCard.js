import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import './ShopCard.css';

const ShopCard = (props) => {
    const { shopName, location, distance, image } = props.shop;
    // console.log(props.shop);
    return (
        <Col sm={6}  >
            <CardGroup style={{ width: '100%' }} >
                <Card className='shop-card'>
                    <div>
                        <img src={image} alt="" className="rounded" style={{ width: '100px' }} />
                    </div>
                    <div className="shop-card-text">
                        <h4 className="shop-text">{shopName}</h4>
                        <h5 className="location-text">{location}</h5>
                        <h5 className="location-text">{distance}</h5>
                    </div>
                </Card>
            </CardGroup>

            {/* <div>
                <img  src={image} alt="" style={{ width: '100px' }} />
            </div>
            <div className="shop-card-text">
                <h4 className="shop-text">{shopName}</h4>
                <h5 className="location-text">{location}</h5>
                <h5 className="location-text">{distance}</h5>
            </div> */}
        </Col>
    );
};

export default ShopCard;