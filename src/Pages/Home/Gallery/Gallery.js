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
                    <div className="card card1 w-100">
                        <h5 className='w-25 text-center'>HELMET</h5>
                        <p className='w-50 text-center'>Choose Best One For You.</p>
                    </div>
                    <div className="card card2 w-100">
                        <h5 className='w-25 text-center'>JACKET</h5>
                        <p className='w-50 text-center'>Choose Best One For You.</p>
                    </div>
                    <div className="card card3 w-100">
                        <h5 className='w-50 text-center'>HAND GLOVES</h5>
                        <p className='w-50 text-center'>Choose Best One For You.</p>
                    </div>
                    <div className="card card4 w-100">
                        <h5 className='w-25 text-center'>BOOT</h5>
                        <p className='w-50 text-center'>Choose Best One For You.</p>
                    </div>
                </div>
                <button className='mt-4 w-25 d-block mx-auto fs-5 update-button'>See More..</button>
                </div>
                
                
            </div>
        </div>
    );
};

export default Gallery;