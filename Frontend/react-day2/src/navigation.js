import App from './App';
import reportWebVitals from './reportWebVitals';
import ClassComponent from './ClassComponent';
import {BrowserRouter, Link, Outlet, Route, Routes} from 'react-router-dom';
function Navigation(){
    return(<BrowserRouter>
        <Link to={'/'}>Home </Link>
        <Link to={'/class'}>Class </Link>
        <Outlet></Outlet>
        <Routes>
          <Route path='/' element={<App></App>}></Route>
          <Route path="/class" element={<ClassComponent />}></Route>
        </Routes>
        </BrowserRouter>)
}
export default Navigation