import {useContext} from 'react';
import { MyContext } from './MyContext';
export default function MyContextChild(){
    var {age,setAge}=useContext(MyContext)

    return(<>
    <input value={age} onChange={(e)=>{setAge(e.target.value)}}></input>
    <br></br>
    Age from Context: {age}</>)
}