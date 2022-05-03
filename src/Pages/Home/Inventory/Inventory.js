import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useInventory from '../../../hooks/useInventory';

const Inventory = () => {
        const [inventory, setInventory] = useInventory ();
        const newInventory = inventory.slice(0,6);
        const navigate = useNavigate();
        const handleUpdateInventory = id => {
            navigate (`/inventory/${id}`)
        }

    return (
        <div>
            <h1>inventory: </h1>
            {
                newInventory.map (inventories => {
                    const {name, price, id} = inventories
                    return (
                        <div>
                            <p>{name}</p>
                            <p>{price}</p>
                            <button onClick={()=> handleUpdateInventory(id)}>Update</button>
                        </div>

                    )
                })
            }
            <Link to='/manageinventory'>Manage Inventory</Link>
        </div>
    );
};

export default Inventory;