import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';

const ManageInventory = () => {
    const [inventory, setInventory] = useInventory ();
    const navigate = useNavigate();
        const handleInventory = id => {
            navigate (`/inventory/${id}`)
        }

    return (
        <div>
            <h1>Manage Inventory:</h1>
            {
                inventory.map(manage => {
                    const {name, price, id} = manage
                    return (
                        <div>
                            <p>{name}</p>
                            <p>{price}</p>
                            <button onClick={()=> handleInventory(id)}>Update</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ManageInventory;