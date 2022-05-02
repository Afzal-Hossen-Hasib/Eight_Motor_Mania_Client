import React, { useEffect, useState } from 'react';
import './Inventory.css'

const Inventory = () => {

    const [inventory, setInventory] = useState([]);
    const showInventory = inventory.slice (0, 6);


    useEffect (() => {
        fetch('data.json')
        .then (res => res.json())
        .then (data => setInventory(data));
    }, [])

    return (
        <div className='container'>
            <h1 className='text-center mt-5'>Inventory</h1>

            <div className='inventory'>
                {
                    showInventory.map (item => {
                        const {name, img, price, quantity} = item 
                        return (
                            <div>
                                <p>{name}</p>
                                <p>{price}</p>
                                <button>Update</button>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default Inventory;