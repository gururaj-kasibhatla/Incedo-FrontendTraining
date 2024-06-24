import React, { useContext } from 'react';
import { myContext } from './MyContext';

export default function MyConsumer2() {
  var { userName, setUserName } = useContext(myContext); 

  return (
    <>
      Username in context: {userName}
    </>
  );
}
