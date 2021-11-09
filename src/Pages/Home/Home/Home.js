import React from 'react';
import Banner from '../Banner/Banner';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Home;