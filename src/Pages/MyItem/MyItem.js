import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyItem.css'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyItem = () => {

    const [user] = useAuthState(auth); 
    const [myItem, setMyItem] = useState ([]);
    const navigate = useNavigate();

    useEffect (() => {
        const getNewItem = async() => {
        const email = user?.email;
        const url = `https://lit-stream-45073.herokuapp.com/myitem?email=${email}`;
            try {
                const {data} = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('jwtToken')}`
                    }
                });
                setMyItem(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getNewItem();
    } ,[user]);

    const handleDelete = id => {
        console.log(id);
        const procced = window.confirm('Are You Sure?')

        if (procced) {
            const url = `https://lit-stream-45073.herokuapp.com/myitem/${id}`;
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
            <h1 className='text-center title w-50 d-block mx-auto text-center my-4'>My New Item</h1> 
            <div className='container my-item'>
            {
                myItem.map(manage => {
                    const {name, price, img, desription, supplier, quantity} = manage
                    return (
                        <div key={manage._id} className='inventory-item text-center'>
                            <img className="w-75 d-block mx-auto" src={img} alt="" />
                            <h2 className='fw-bold'>{name}</h2>
                            <p className='fs-5 fw-bold text-danger'>Price: <span className='text-muted'>${price}</span></p>
                            <p className='fs-5 fw-bold text-danger'>Quantity: <span className='text-muted'>{quantity}</span></p>
                            <p className='fs-6 fw-bold px-2'>Details: <span className='fs-6 text-muted'>{desription}</span></p>
                            <p className='fs-5 fw-bold'>Supplier: <span className='text-muted'>{supplier}</span></p>
                            <div className='ps-5'>
                            <button
                            onClick={() => handleDelete(manage._id)} 
                            className='w-50 delete-button'>
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