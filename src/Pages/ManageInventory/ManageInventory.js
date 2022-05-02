import React, { useEffect, useState } from 'react';

const ManageInventory = () => {

    const [inventory, setInventory] = useState([]);

    useEffect (() => {
        fetch('data.json')
        .then (res => res.json())
        .then (data => setInventory(data));
    }, [])

    return (
        <div>
            <h1>Inventory:{inventory.length}</h1>
            {
                inventory.map(item => {
                    const {name, price} = item;
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
    );
};

export default ManageInventory;