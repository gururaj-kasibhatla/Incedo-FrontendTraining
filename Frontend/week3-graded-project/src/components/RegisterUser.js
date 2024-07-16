import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Register() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        fullName: '',
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!user.email || !user.password || user.fullName) { alert('Please enter details'); return }
            const response = await axios.post('http://localhost:5000/users', user);
            console.log(response.data);
            alert('User successfully registered')
            navigate('/');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value });
    };

    return (
        <>
            <h1>Register</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="fullName">
                    <Form.Label >Full Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your Full Name"
                        value={user.fullName}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={user.email}
                        onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default Register;
