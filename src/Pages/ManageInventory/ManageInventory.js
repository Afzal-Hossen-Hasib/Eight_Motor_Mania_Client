import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';

const ManageInventory = () => {
    const [inventory, setInventory] = useInventory ();
    const navigate = useNavigate();
        const handleInventory = id => {
            navigate (`/inventory/${id}`)
        }
    
        const handleDelete = id => {
            const procced = window.confirm('Are You Sure?')

            if (procced) {
                const url = `http://localhost:5000/inventory/${id}`;
                fetch (url, {
                    method: 'DELETE'
                })
                .then (res => res.json())
                .then (data => {
                    console.log(data);
                    const remaining = inventory.filter(manage => manage._id !== id);
                    setInventory (remaining);
                })
            }
        }

    return (
        <div>
            <h1>Manage Inventory:</h1>
            {
                inventory.map(manage => {
                    const {name, price, _id} = manage
                    return (
                        <div key={manage._id}>
                            <p>{name}</p>
                            <p>{price}</p>
                            <div>
                            <button onClick={()=> handleInventory(_id)}>Update</button>

                            <button
                            onClick={() => handleDelete(manage._id)} 
                            className='ms-3'>
                                Delete
                            </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ManageInventory;