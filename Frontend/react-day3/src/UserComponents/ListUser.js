import axios from 'axios';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ListUser() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:5000/users");
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
            <h1>Users</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Fist Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Hobbies</th>
                        <th>Team</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((temp) => (
                        <tr key={temp.id}>
                            <td>{temp.fname}</td>
                            <td>{temp.lname}</td>
                            <td>{temp.gender}</td>
                            <td>{temp.hobbies}</td>
                            <td>{temp.team}</td>
                            <td>
                                <Link to={'/manageuser/'+temp.id}>Manage</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
