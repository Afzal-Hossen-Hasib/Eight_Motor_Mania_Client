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
        <div className="row">
            <div className="col-md-6">
                <div className="left-row">
                <img src={inventory.img} alt="" />
                <h2>{inventory.name}</h2>
                <p>Quantity: {inventory.quantity}</p>
                <p>Price: ${inventory.price}</p>
                <p>Details: {inventory.desription}</p>
                <p>Supplier: {inventory.supplier}</p>
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
