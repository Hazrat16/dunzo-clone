import React from 'react';
import Body from './Body';
import Bottom from './Bottom';
import Footer from './Footer';
import TopPicks from './TopPicks';

const Home = () => {
    return (
        <div>
            <Body/>
            <TopPicks/>
            <Bottom/>
            <Footer/>
        </div>
    );
};

export default Home;