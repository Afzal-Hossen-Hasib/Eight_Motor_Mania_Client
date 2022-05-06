import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useInventory from '../../../hooks/useInventory';
import './Inventory.css'

const Inventory = () => {
        const [inventory, setInventory] = useInventory ();
        const newInventory = inventory.slice(0,6);
        const navigate = useNavigate();
        const handleUpdateInventory = id => {
            navigate (`/inventory/${id}`)
        }

    return (
        <div> 
            <div className='container'>
                <h1 className='title w-50 d-block mx-auto text-center mt-5'>CHOOSE YOUR RIDING STYLE</h1>
            <div className='inventory-section'>
            {
                newInventory.map (inventories => {
                    const {name, price, img, desription, supplier, quantity, _id} = inventories
                    return (
                        <div key={inventories._id} className='inventory-item text-center'>   
                            <img className="w-75 d-block mx-auto" src={img} alt="" />
                            <h2>{name}</h2>
                            <p>Quantity: {quantity}</p>
                            <p>Price: ${price}</p>
                            <p>Details: {desription}</p>
                            <p>Supplier: {supplier}</p>
                            <button className='update-button d-block mx-auto w-50' onClick={()=> handleUpdateInventory(_id)}>Update</button>
                        </div>

                    )
                })
            }
            </div>
            <div className='manage-button'>
            <Link to='/manageinventory'>Manage Inventory</Link>
            </div>
            </div>
        </div>
    );
};

export default Inventory;