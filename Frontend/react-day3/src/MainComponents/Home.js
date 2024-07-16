import axios from 'axios';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:5000/items");
            if (response.status !== 200) {
                console.log("Error fetching data");
            } else {
                const fetchedData = response.data;
                console.log(fetchedData);
                setData(fetchedData);
            }
        } catch (error) {
            console.log("Error", error);
        }
    };

    return (
        <>
            <h1>Items</h1>
            <button type="button" onClick={fetchData}>Get Items</button>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((temp) => (
                        <tr key={temp.id}>
                            <td>{temp.name}</td>
                            <td>{temp.price}</td>
                            <td>
                                <Link to={'/manage/'+temp.id}>Manage</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
