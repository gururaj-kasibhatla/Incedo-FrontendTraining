import {useState,useMemo} from 'react'
export default function HeavyComponent(){
 var[count,setCount]=useState(0)

 const hugeCalculation=(num)=>{
    for(var i=0;i<100000000;i++){
        // waiting
    }
    return num*num;
 }

 //memorizes the function
 var memorizedOutput= useMemo(()=>hugeCalculation(count), [count])

 return(
    <>
    <input type="number" value={count} onChange={(e)=>{setCount(e.target.value)}}></input>
    <br></br>
    Output: {memorizedOutput}
    </>
 )
}