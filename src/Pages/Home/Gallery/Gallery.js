import React from 'react';
import './Gallery.css'

const Gallery = () => {
    return (
        <div className='mt-5'>
            <div className='gallery pt-2'>
                <div className='container'>
                <h1 className='title w-50 d-block mx-auto text-center mt-4'>YOU MAY BE INTERESTED</h1>
                <div className='mt-3 title-section'>
                <h3 className='new-title w-25 d-block mx-auto text-center mb-3'>Motor Mania</h3>
                        <p>In the new Motor Mania web you'll find the greatest online sales stock for motorcycle accessories and gear. Our maximum guarantee is the trust that the best brands of road and off-road gear have deposited in us.</p>
                </div>

                <div className='image-card'>
                    <div className="card card1 w-75">
                        <h5>Helmet</h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="card card2 w-75">
                        <h5>Jacket</h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="card card3 w-75">
                        <h5>Hand Gloves</h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="card card4 w-75">
                        <h5>Boot</h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <button className='mt-5 w-25 d-block mx-auto fs-5 update-button'>See More..</button>
                </div>
                
                
            </div>
        </div>
    );
};

export default Gallery;