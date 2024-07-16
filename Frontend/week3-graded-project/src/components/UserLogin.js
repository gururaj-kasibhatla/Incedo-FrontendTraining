import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({}); // State for form validation errors
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch list of users from your backend API
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/users');
                setUsers(response.data); // Assuming response.data is an array of users
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []); // Empty dependency array ensures this effect runs once on component mount

    const handleChange = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = user;
        const newErrors = {};

        if (!email) {
            newErrors.email = 'Email is required';
        }

        if (!password) {
            newErrors.password = 'Password is required';
        }

        // Validate against existing users
        const existingUser = users.find(u => u.email === email);
        if (!existingUser || existingUser.password !== password) {
            newErrors.password = 'Invalid email or password';
        }

        // Set errors state
        setErrors(newErrors);

        // If there are any errors, return to stop further execution
        if (Object.keys(newErrors).length > 0) {
            return;
        }

        // Handle successful login
        console.log('Login successful');

        // Redirect to Dashboard
        navigate('/dashboard/'+existingUser.fullName);
    };

    return (
        <>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={user.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
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
                        isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.password}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <h2>Don't have an account? Click on the button below to register</h2>
            <Button variant="success" type="submit" onClick={()=>{navigate('/register')}}>Register</Button>
        </>
    );
}

export default Login;
