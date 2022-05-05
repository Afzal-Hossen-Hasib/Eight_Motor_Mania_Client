import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

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
    
    return (
        <div>
            <h1>My Item{myItem.length}</h1> 
            <p>{myItem.name}</p>
            <button>Delete</button>
        </div>
    );
};

export default MyItem;