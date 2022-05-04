import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;