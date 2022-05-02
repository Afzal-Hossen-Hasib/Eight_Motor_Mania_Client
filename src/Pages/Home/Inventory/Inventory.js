import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Inventory.css'

const Inventory = () => {

    const [inventory, setInventory] = useState([]);
    const showInventory = inventory.slice (0, 6);
    const navigate = useNavigate();


    useEffect (() => {
        fetch('data.json')
        .then (res => res.json())
        .then (data => setInventory(data));
    }, [])

    const handleUpdateInventory = id => {
        navigate (`/inventory/ ${id}`);
    }

    return (
        <div className='container'>
            <h1 className='text-center mt-5'>Inventory</h1>

            <div className='inventory'>
                {
                    showInventory.map (item => {
                        const {name, img, price, quantity, id} = item 
                        return (
                            <div>
                                <p>{name}</p>
                                <p>{price}</p>
                                <button onClick={ () => handleUpdateInventory(id)}>Update</button>
                            </div>
                        )
                    })
                }
                <Link to= '/manageinventory'>Manage Inventory</Link>
            </div>

        </div>
    );
};

export default Inventory;