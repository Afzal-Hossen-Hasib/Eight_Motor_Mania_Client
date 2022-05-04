import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import './ManageInventory.css'

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
        <div className='container'>
            <h1>Manage Inventory</h1>
            <div className='inventory-section'>
            {
                inventory.map(manage => {
                    const {name, price, img, desription, supplier, quantity, _id} = manage
                    return (
                        <div key={manage._id} className='inventory-item'>
                            <img src={img} alt="" />
                            <h2>{name}</h2>
                            <p>{price}</p>
                            <p>{quantity}</p>
                            <p>{desription}</p>
                            <p>{supplier}</p>
                            <div className='ps-5'>
                            <button className='update-button' onClick={()=> handleInventory(_id)}>Update</button>

                            <button
                            onClick={() => handleDelete(manage._id)} 
                            className='ms-3 delete-button'>
                                Delete
                            </button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <div className='manage-button'>
            <Link to='/additem'>Add New Item</Link>
            </div>
        </div>
    );
};

export default ManageInventory;