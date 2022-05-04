import React from 'react';
import AnotherSection from '../AnotherSection/AnotherSection';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Gallery></Gallery>
            <AnotherSection></AnotherSection>
        </div>
    );
};

export default Home;