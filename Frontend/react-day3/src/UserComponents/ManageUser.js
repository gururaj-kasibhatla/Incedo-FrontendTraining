import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ManageUser() {
    const { id } = useParams();
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');     
    const [gender,setGender] = useState('');
    const [hobbies,setHobbies] = useState('');
    const [team,setTeam] = useState('');



    useEffect(() => {
        getById();
    }, [id]);

    const getById = async () => {
        try {
            const response = await axios.get("http://localhost:5000/users/" + id);
            if (response.status === 200) { 
                const { fname, lname,gender,hobbies,team } = response.data; 
                setFname(fname);
               setLname(lname);
               setGender(gender);
               setHobbies(hobbies);
               setTeam(team)
            } else {
                alert("Error fetching data");
            }
        } catch (error) {
            alert("API call failed");
        }
    };

    const update = async () => {
        try {
            const response = await axios.put("http://localhost:5000/users/" + id, {
                fname: fname,
                lname: lname,
                gender: gender,
                hobbies: hobbies,
                team: team
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
            const response = await axios.delete("http://localhost:5000/users/" + id);
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
            First Name:
            <input value={fname} type="text" onChange={(e) => setFname(e.target.value)} required />
            <br />
            Last Name:
            <input value={lname} type="text" required onChange={(e) => setLname(e.target.value)} />
            <br />
            Gender:
            <input value={gender} type="text" required onChange={(e) => setGender(e.target.value)} />
            <br />
            Hobbies:
            <input value={hobbies} type="text" required onChange={(e) => setHobbies(e.target.value)} />
            <br />
            Team:
            <input value={team} type="text" required onChange={(e) => setTeam(e.target.value)} />
            <br />

            <button type="button" onClick={update}>Update</button>
            <br />
            <button type="button" onClick={deleteItem}>Delete</button>
        </>
    );
}
