import React, { createContext, useState } from 'react';

var myContext = createContext();

function InformationStore(props) {
  var [userName, setUserName] = useState("raj"); 
  var children = props.children;

  return (
    <myContext.Provider value={{ userName, setUserName }}>
      {children}
    </myContext.Provider>
  );
}

export { myContext, InformationStore };
