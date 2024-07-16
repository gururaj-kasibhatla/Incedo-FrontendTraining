// index.js or App.js (main entry point)
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/UserLogin';
import Dashboard from './components/LibraryDashboard';
import Register from './components/RegisterUser';


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard/:username" element={<Dashboard />} />
      <Route path="/register" element={<Register/>}/>
    </Routes>
  </Router>
);
export default App;
