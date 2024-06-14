import { useState } from 'react';
import axios from 'axios';

export default function Add() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const addItem = async () => {
        try {
            const response = await axios.post("http://localhost:5000/items", {
                name: name,
                price: price
            });
            if (response.status == 201) {
                alert("Data added");
            } else {
                alert("Error adding data");
            }
        } catch (error) {
            alert("API call failed");
        }
    };

    return (
        <>
            <form onSubmit={addItem}>
                <label>Name</label>
                <input type="text" required onChange={(e) => setName(e.target.value)} />
                <br />
                <label>Price</label>
                <input type="text" required onChange={(e) => setPrice(e.target.value)} />
                <br />
                <button type="submit">Add Item</button> {/* Changed type to "submit" */}
            </form>
        </>
    );
}
