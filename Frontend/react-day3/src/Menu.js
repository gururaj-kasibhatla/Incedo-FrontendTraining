import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './MainComponents/Home';
import About from './MainComponents/About';
import Add from './MainComponents/Add';
import Manage from './MainComponents/Manage';
import AddFormik from './MainComponents/AddFormik';
import AddUser from './UserComponents/AddUser';
import ListUser from './UserComponents/ListUser';
import ManageUser from './UserComponents/ManageUser';

export default function Menu() {
  return (
    <BrowserRouter>
      <Link to="/">Home </Link>
      <Link to="/about/name">Name </Link>
      <Link to="/add">Add </Link>
      <Link to="/addformik">Add using Formik </Link>
      <Link to="/adduser">Add user </Link>
      <Link to="/listuser">List user </Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:name" element={<About />} />
        <Route path="/add" element={<Add />} />
        <Route path="/manage/:id" element={<Manage />} />
        <Route path="/addformik" element={<AddFormik />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/listuser" element={<ListUser />} />
        <Route path="/manageuser/:id" element={<ManageUser />} />
      </Routes>
    </BrowserRouter>
  );
}