import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import './UpdateInventory.css'

const UpdateInventory = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  

  return (
    <div className="container">
        <h2 className="text-center title w-50 d-block mx-auto text-center my-4">Delivaerd And Update Stock</h2>
        <div className="row">
            <div className="col-md-6">
                <div className="left-row text-center">
                <img className="w-50 d-block mx-auto" src={inventory.img} alt="" />
                <h2 className='fw-bold'>{inventory.name}</h2>
                <p className='fs-5 fw-bold text-danger'>Price: <span className='text-muted'>${inventory.price}</span></p>
                <p className='fs-5 fw-bold text-danger'>Quantity: <span className='text-muted'>{inventory.quantity}</span> 
                <button className="update-button ms-3">Stock Update</button>
                </p>
                <p className='fs-6 fw-bold px-2'>Details: <span className='text-muted'>{inventory.desription}</span></p>
                <p className='fs-5 fw-bold'>Supplier: <span className='text-muted'>{inventory.supplier}</span></p>
                <button className='delete-button d-block fs-6 mx-auto w-50'>Delivered</button>
                </div>
            </div>
            <div className="col-md-6">
                <div className="right-row">
                    <input className="w-75 d-block mx-auto mt-2" type="text" name="name" id="" placeholder="Name"/> <br />
                    <input className="w-75 d-block mx-auto" type="number" name="quantity" id="" placeholder="Quantity"/> <br />
                    <button className="update-button d-block fs-5 mx-auto w-50">Re-Stock</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default UpdateInventory;
