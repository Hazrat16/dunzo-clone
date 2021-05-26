import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Cards = (props) => {
    console.log(props);
    const { id, name, image, title } = props.card;
    const history = useHistory();

    const shopDetail = (name) => {
        history.push(`/${name}`);
    }
    return (
            <Col sm={3} onClick={()=> shopDetail(name)} style={{cursor:'pointer'}}>
                <img className="card-img-top" src={image} alt="" />
            </Col>
    );
};

export default Cards;