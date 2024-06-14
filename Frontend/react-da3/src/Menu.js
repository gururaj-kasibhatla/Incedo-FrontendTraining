import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './MainComponents/Home';
import About from './MainComponents/About';
import Add from './MainComponents/Add';
import Manage from './MainComponents/Manage';

export default function Menu() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about/name">Name</Link>
      <Link to="/add">Add</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:name" element={<About />} />
        <Route path="/add" element={<Add />} />
        <Route path="/manage/:id" element={<Manage />} />
      </Routes>
    </BrowserRouter>
  );
}