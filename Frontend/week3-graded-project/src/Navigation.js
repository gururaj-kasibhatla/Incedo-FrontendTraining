import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Register from './components/RegisterUser';
import Login from './components/UserLogin';
import Dashboard from './components/LibraryDashboard';

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                   
                </li>
            </ul>
        </nav>
    );
}

function App() {
    return (
        <Router>
            <div>
                <Navigation />

                <Switch>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
