import { useEffect, useState } from "react"

const useInventory = () => {

    const [inventory, setInventory] = useState([]); 

    useEffect (()=> {
        fetch('data.json')
        .then (res => res.json())
        .then (data => setInventory(data));
    } ,[])

    return [inventory, setInventory];
};

export default useInventory;