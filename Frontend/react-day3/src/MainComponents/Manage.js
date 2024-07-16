import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Manage() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        getById();
    }, [id]);

    const getById = async () => {
        try {
            const response = await axios.get("http://localhost:5000/items/" + id);
            if (response.status === 200) { 
                const { name, price } = response.data; 
                setName(name);
                setPrice(price);
            } else {
                alert("Error fetching data");
            }
        } catch (error) {
            alert("API call failed");
        }
    };

    const update = async () => {
        try {
            const response = await axios.put("http://localhost:5000/items/" + id, {
                name: name,
                price: price
            });
            if (response.status === 200) { 
                alert("Data updated");
            } else {
                alert("Error updating data");
            }
        } catch (error) {
            alert("API call failed");
        }
    };

    const deleteItem = async () => {
        try {
            const response = await axios.delete("http://localhost:5000/items/" + id);
            if (response.status === 200) { // Correct status check
                alert("Data deleted");
            } else {
                alert("Error deleting data");
            }
        } catch (error) {
            alert("API call failed");
        }
    };

    return (
        <>
            <hr />
            Name:
            <input value={name} type="text" onChange={(e) => setName(e.target.value)} required />
            <br />
            Price:
            <input value={price} type="text" required onChange={(e) => setPrice(e.target.value)} />
            <br />
            <button type="button" onClick={update}>Update</button>
            <br />
            <button type="button" onClick={deleteItem}>Delete</button>
        </>
    );
}
