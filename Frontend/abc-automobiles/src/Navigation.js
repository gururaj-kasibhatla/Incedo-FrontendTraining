import App from './App';
import {BrowserRouter, Link, Outlet, Route, Routes} from 'react-router-dom';
import About from './About';
import Menu from './Menu';
import AddCar from './AddCar';
function Navigation(){
    return(<BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/addcar" element={<AddCar />}></Route>
        </Routes>
        </BrowserRouter>)
}
export default Navigation