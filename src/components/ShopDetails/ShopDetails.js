import React from 'react';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import ShopCard from './ShopCard';
import './ShopDetails.css';

const shopDetail = [
    {
        shopName: 'SN Trades and Vegetables',
        location: 'Ulsoor',
        distance: '4.1 km',
        image: 'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/YTJucjlTZGxRMnN0bGZBMzRTK0RFUT09-1591200867005-store_image.jpg'
    },
    {
        shopName: 'Fresh Fruits',
        location: 'Bridge Road',
        distance: '8.1 km',
        image: 'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/f0b6d15b-17e5-47cb-871f-f72d6044bbc7-1555997490231-store_image.jpeg'
    },
    {
        shopName: 'Natures Basket',
        location: 'Richmond Town',
        distance: '4 km',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
    },
    {
        shopName: 'Nilgiries',
        location: 'Cambride',
        distance: '1 km',
        image: 'https://media.istockphoto.com/photos/selection-of-american-food-picture-id931308812?k=6&m=931308812&s=612x612&w=0&h=bIbWqdW3LEc9Q5_WnqYG0blqrKp9zW7Qc36Gq35FTaE='
    },
    {
        shopName: 'Vegetables',
        location: 'Ulsoor',
        distance: '4.1 km',
        image: 'https://www.melissahartfiel.com/wp-content/uploads/2013/04/20130426-1304_untitled0051.jpg'
    },
    {
        shopName: 'Foodhall',
        location: 'Ulsoor',
        distance: '4 km',
        image: 'https://media.timeout.com/images/105187765/image.jpg'
    },
    {
        shopName: 'SN Trade and Vegetable',
        location: 'Ulsoor',
        distance: '4.1 km',
        image: 'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/YTJucjlTZGxRMnN0bGZBMzRTK0RFUT09-1591200867005-store_image.jpg'
    },
    {
        shopName: 'Fresh Fruit',
        location: 'Bridge Road',
        distance: '8.1 km',
        image: 'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/f0b6d15b-17e5-47cb-871f-f72d6044bbc7-1555997490231-store_image.jpeg'
    },
    {
        shopName: 'Nature Basket',
        location: 'Richmond Town',
        distance: '4 km',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
    },
    {
        shopName: 'Nilgirie',
        location: 'Cambride',
        distance: '1 km',
        image: 'https://media.istockphoto.com/photos/selection-of-american-food-picture-id931308812?k=6&m=931308812&s=612x612&w=0&h=bIbWqdW3LEc9Q5_WnqYG0blqrKp9zW7Qc36Gq35FTaE='
    },
    {
        shopName: 'Vegetable',
        location: 'Ulsoor',
        distance: '4.1 km',
        image: 'https://www.melissahartfiel.com/wp-content/uploads/2013/04/20130426-1304_untitled0051.jpg'
    },
    {
        shopName: 'Foodhalls',
        location: 'Ulsoor',
        distance: '4 km',
        image: 'https://media.timeout.com/images/105187765/image.jpg'
    },
]

const ShopDetails = () => {
    const {title,name, id} = useParams();
    console.log(title, name, id);
    return (
        <div className='shop-details'>
            <section className='stores pt-5 pd-5 d-flex align-center bg-light'>
                <img src="https://ik.imagekit.io/dunzo/icons/website/bluegreen/category/grocery.png?tr=w-88,h-88,cm-pad_resize" alt="" />
                <h3 style={{paddingLeft:'20px',paddingTop:'10px'}}>{name} in Bangalore <span><h6>177 Stores</h6></span></h3>
            </section>
            <section>
                <Row>
                    {
                        shopDetail.map(shop => <ShopCard shop={shop} key={shop.shopName}></ShopCard>)
                    }
                </Row>
            </section>
        </div>
    );
};

export default ShopDetails;