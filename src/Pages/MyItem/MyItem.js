import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyItem.css'

const MyItem = () => {

    const [user] = useAuthState(auth); 
    const [myItem, setMyItem] = useState ([]);

    useEffect (() => {
        const getNewItem = async() => {
        const url = `http://localhost:5000/myitem`;
        const {data} = await axios.get(url);
        setMyItem(data);
        }
        getNewItem();
    } ,[user]);

    const handleDelete = id => {
        const procced = window.confirm('Are You Sure?')

        if (procced) {
            const url = `http://localhost:5000/myitem/${id}`;
            fetch (url, {
                method: 'DELETE'
            })
            .then (res => res.json())
            .then (data => {
                console.log(data);
                const remaining = myItem.filter(manage => manage._id !== id);
                setMyItem (remaining);
            })
        }
    }
    
    return (
        <div>
            <h1>My Item{myItem.length}</h1> 
            <div className='container my-item'>
            {
                myItem.map(manage => {
                    const {name, price, img, desription, supplier, quantity} = manage
                    return (
                        <div key={manage._id} className='inventory-item'>
                            <img src={img} alt="" />
                            <h2>{name}</h2>
                            <p>Quantity: {quantity}</p>
                            <p>Price: ${price}</p>
                            <p>Details: {desription}</p>
                            <p>Supplier: {supplier}</p>
                            <div className='ps-5'>
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
        </div>
    );
};

export default MyItem;