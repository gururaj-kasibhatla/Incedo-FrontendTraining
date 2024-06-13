import App from './App';
import {BrowserRouter, Link, Outlet, Route, Routes} from 'react-router-dom';
import About from './About';
import Menu from './Menu';
function Navigation(){
    return(<BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        </BrowserRouter>)
}
export default Navigation