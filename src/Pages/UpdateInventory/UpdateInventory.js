import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateInventory = () => {

    const {id} = useParams ();
    
    return (
        <div>
            <h1>Update Inventory {id}</h1>
            
        </div>
    );
};

export default UpdateInventory;