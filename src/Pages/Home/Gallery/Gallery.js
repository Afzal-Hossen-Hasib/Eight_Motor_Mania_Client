import React from 'react';
import './Gallery.css'

const Gallery = () => {
    return (
        <div className='mt-5'>
            <div className='gallery'>
                <div className='container'>
                <h1 className='text-center'>Gallery</h1>
                <div>
                <h1>Motor Mania</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illo earum cupiditate, sunt aspernatur laborum quas rem cum nulla voluptate et pariatur quia iste! Est cumque error itaque mollitia praesentium.</p>
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
                <button className='w-25 d-block mx-auto'>See More..</button>
                </div>
                
                
            </div>
        </div>
    );
};

export default Gallery;