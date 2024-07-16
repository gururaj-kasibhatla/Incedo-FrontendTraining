import {createContext,useState} from 'react';
 var MyContext=createContext()

function SharedData(props){
    var [age,setAge]=useState("27")
    var children=props.children

    return(<MyContext.Provider value={{age,setAge}}>
       { children}
    </MyContext.Provider>)
 }
export {MyContext,SharedData};