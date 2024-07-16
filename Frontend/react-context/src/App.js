import logo from './logo.svg';
import './App.css';
import { SharedData } from './MyContext';
import MyContextChild from './MyContextChild';

function App() {
  return (
    <div className="App">
     <SharedData>
      <MyContextChild></MyContextChild>
     </SharedData>
    </div>
  );
}

export default App;
