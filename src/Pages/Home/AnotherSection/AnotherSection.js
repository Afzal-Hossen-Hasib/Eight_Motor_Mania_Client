import React from 'react';
import './AnotherSection.css'

const AnotherSection = () => {
    return (
        <div className='container mt-5'>
            <h1 className='title w-50 d-block mx-auto text-center'>Special Offer</h1>
            <table className='frist-section'>
                <tr className='second-section'>
                    <td className='body-section'>
                        <h2>Save Upto 50% On New Arrivals</h2>
                    </td>
                </tr>

                <tr>
                    <td className='third-section'>
                        <h1>The Perfect Way To Style In 2022</h1>
                        <a href="">BUY NEW COLLECTION HERE</a>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default AnotherSection;