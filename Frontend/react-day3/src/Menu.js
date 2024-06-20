import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React,{Suspense} from 'react'
// import Block from './LifeCycle/Block';
// import Home from './MainComponents/Home';
// import About from './MainComponents/About';
// import Add from './MainComponents/Add';
// import Manage from './MainComponents/Manage';
// import AddFormik from './MainComponents/AddFormik';
// import AddUser from './UserComponents/AddUser';
// import ListUser from './UserComponents/ListUser';
// import ManageUser from './UserComponents/ManageUser';

var Home=React.lazy(()=>import("./MainComponents/Home"))
var Add=React.lazy(()=>import("./MainComponents/Add"))
var About=React.lazy(()=>import("./MainComponents/About"))
var Manage=React.lazy(()=>import("./MainComponents/Manage"))
var AddFormik=React.lazy(()=>import("./MainComponents/AddFormik"))
var AddUser=React.lazy(()=>import("./UserComponents/AddUser"))
var ListUser=React.lazy(()=>import("./UserComponents/ListUser"))
var ManageUser=React.lazy(()=>import("./UserComponents/ManageUser"))
var Block=React.lazy(()=>import("./LifeCycle/Block"))

export default function Menu() {
  return (
    <Suspense fallback={<div>loading ..</div>}>
    <BrowserRouter>
      <Link to="/">Home </Link>
      <Link to="/about/name">Name </Link>
      <Link to="/add">Add </Link>
      <Link to="/addformik">Add using Formik </Link>
      <Link to="/adduser">Add user </Link>
      <Link to="/listuser">List user </Link>
      <Link to="/score">Score </Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:name" element={<About />} />
        <Route path="/add" element={<Add />} />
        <Route path="/manage/:id" element={<Manage />} />
        <Route path="/addformik" element={<AddFormik />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/listuser" element={<ListUser />} />
        <Route path="/manageuser/:id" element={<ManageUser />} />
        <Route path="/score" element={<Block />} />
      </Routes>
    </BrowserRouter>
    </Suspense>
  );
}