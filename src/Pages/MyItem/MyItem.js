import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {

    const [user] = useAuthState(auth);

    const [myItem, setMyItem] = useState([]);
    useEffect (() => {

        const getMyItem = async() => {
            const email = user.email;
            const url = `http://localhost:5000/myitem?email=${email}`;
            const {data} = await axios.get (url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('jwtToken')}` 
                }
            });
            setMyItem(data);
        }
        getMyItem();

    } ,[user]);
    return (
        <div>
            <h1>My Item{myItem.length}</h1> 
        </div>
    );
};

export default MyItem;