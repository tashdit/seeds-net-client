import React from 'react';
import Banner from '../Banner/Banner';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Home;