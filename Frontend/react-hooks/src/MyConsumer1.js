import React, { useContext } from 'react';
import { myContext } from './MyContext';

export default function MyConsumer1() {
  var { userName, setUserName } = useContext(myContext); 

  return (
    <>
    Change Name:
    <input onChange={(e)=>{setUserName(e.target.value)}} value={userName}></input>
    <br></br>
      Username in context: {userName}
    </>
  );
}
