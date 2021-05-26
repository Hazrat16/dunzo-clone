import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Cards from './Cards';
import Card from './Cards';

const cardData = [
    {
        id:1,
        name:'grocery-stores',
        image:'https://ik.imagekit.io/dunzo/home/tr:w-488,h-360_home_icon/operator-FFWUCfzmUzhok89HMYt0ON2Gy5oZECO73gRenPw11HxAeCLBtTBOG8FMqMTe92UOnScOPMUnjYDcaPVxx7wSFJwXJ3kSR3YRsPby4EgC4zW2mVYLc99zuvVh7O2Ppmx2QMQd40UiwYLGhy0OjbMayr.png',
        title:'Groceries & Essentials'
    },
    {
        id:2,
        name:'send-packages',
        image:"https://ik.imagekit.io/dunzo/home/tr:w-488,h-360_home_icon/dunzo/icons/newHome/promoBanner/kitImageUrl/largeIcons/default_pnd_secondary2_1613527381240.png",
        title:'Send packages'
    },
    {
        id:3,
        name:'restaurants',
        image:"https://ik.imagekit.io/dunzo/home/tr:w-488,h-360_home_icon/operator-ABHxCyRo8CLcEMC0YE43zsmH2XHFv3xr6B8Y3tIdBpKE1NBAjyHS4vgJY3T3z8AEascTap9OETFY0CdvpHj70KZSGFNrCxkFVtUugsMRkyV5jVk9XHl164PCPop56VNkdpLhfymH86JkFjMlYYgQHK.jpg",
        title:'Food Delivery'
    },
    {
        id:4,
        name:'fruit-vegetable-store',
        image:"https://ik.imagekit.io/dunzo/home/tr:w-488,h-360_home_icon/dunzo/icons/newHome/promoBanner/kitImageUrl/largeIcons/default_fnv_secondary2_1613527515094.png",
        title:'Fruits & Vegetables'
    }
]

const Body = () => {
    
    return (
        <div className="pt-5" style={{ backgroundColor: "rgb(247, 253, 250", paddingLeft: '130px', paddingRight: '130px' }}>
            <section className="pb-5 pt-2 title">
                <h3>Bangalore</h3>
                <p>Why step out when you can get everything delivered home with the tap of a button? Bangalore’s favourite delivery app gets you Food, Grocery, Medicine, Pet Supplies, Fruits & Vegetables, Meat & Fish, Health & Wellness, Gifts and Send Packages from one end of the city to the other. From your local kirana stores to your favourite brands, grocery shopping to your forgotten charger, we are always on the move for you. Why worry about your chores, when you can get it all Dun!</p>
            </section>
            <section className="deliveryCard pb-3">
                <Container>
                    <Row>
                    {
                        cardData.map(card => <Cards card={card} key={card.id}></Cards> )
                    }

                        {/* <Col sm={3} onClick={function() {history.push('/footer')}} style={{cursor:'pointer'}}>
                            <img className="card-img-top" src="https://ik.imagekit.io/dunzo/home/tr:w-488,h-360_home_icon/operator-FFWUCfzmUzhok89HMYt0ON2Gy5oZECO73gRenPw11HxAeCLBtTBOG8FMqMTe92UOnScOPMUnjYDcaPVxx7wSFJwXJ3kSR3YRsPby4EgC4zW2mVYLc99zuvVh7O2Ppmx2QMQd40UiwYLGhy0OjbMayr.png" alt="" />
                        </Col>
                        <Col sm={3}>
                            <img className="card-img-top" src="https://ik.imagekit.io/dunzo/home/tr:w-488,h-360_home_icon/dunzo/icons/newHome/promoBanner/kitImageUrl/largeIcons/default_pnd_secondary2_1613527381240.png" alt="" />
                        </Col>
                        <Col sm={3}>
                            <img className="card-img-top" src="https://ik.imagekit.io/dunzo/home/tr:w-488,h-360_home_icon/operator-ABHxCyRo8CLcEMC0YE43zsmH2XHFv3xr6B8Y3tIdBpKE1NBAjyHS4vgJY3T3z8AEascTap9OETFY0CdvpHj70KZSGFNrCxkFVtUugsMRkyV5jVk9XHl164PCPop56VNkdpLhfymH86JkFjMlYYgQHK.jpg" alt="" />
                        </Col>
                        <Col sm={3}>
                            <img className="card-img-top" src="https://ik.imagekit.io/dunzo/home/tr:w-488,h-360_home_icon/dunzo/icons/newHome/promoBanner/kitImageUrl/largeIcons/default_fnv_secondary2_1613527515094.png" alt="" />
                        </Col> */}
                    </Row>
                </Container>
                <Container className="mt-3">
                    <Row>
                        <Col sm={2}>
                            <div className="card smallCard align-items-center">
                                <img className="card-img-top" src="https://ik.imagekit.io/dunzo/home/tr:w-80,h-80_home_icon/icons/R4_Icons/Home/default_meat_tertiary_grid_1609739765849.png" alt="" />
                                <div className="card-body">
                                    <p style={{ fontSize: '13px' }}>Meat and Fish</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={2}>
                            <div className="card smallCard align-items-center">
                                <img className="card-img-top" src="https://ik.imagekit.io/dunzo/home/tr:w-80,h-80_home_icon/icons/R4_Icons/Home/default_pets_tertiary_grid_1609739755734.png" alt="" />
                                <div className="card-body">
                                    <p style={{ fontSize: '13px' }}>Pet Supplies</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={2}>
                            <div className="card smallCard align-items-center">
                                <img className="card-img-top" src="https://ik.imagekit.io/dunzo/home/tr:w-80,h-80_home_icon/icons/R4_Icons/Home/paan_grid_1609739855940.png" alt="" />
                                <div className="card-body">
                                    <p style={{ fontSize: '13px' }}>Paan Shop</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={2}>
                            <div className="card smallCard align-items-center">
                                <img className="card-img-top" src="https://ik.imagekit.io/dunzo/home/tr:w-80,h-80_home_icon/icons/R4_Icons/Home/default_gifts_tertiary_grid_1613527886275.png" alt="" />
                                <div className="card-body">
                                    <p style={{ fontSize: '13px' }}>Gifts and Lifestyles</p>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Body;