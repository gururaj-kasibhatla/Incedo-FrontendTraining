import React, { useState } from "react";
import usePriceCalculation from "./PriceCalculator";
import useFetch from "./UserList";
import useCalculate from "./TotalCalculator";

const HookUser = () => {
   const userList = useFetch("https://jsonplaceholder.typicode.com/users");

   const price = usePriceCalculation(200, 60, 34);

   const [m1, setM1] = useState(0);
   const [m2, setM2] = useState(0);
   const [m3, setM3] = useState(0);
   const [m4, setM4] = useState(0);
   const [m5, setM5] = useState(0);
   const [total, setTotal] = useState(0);

   const calculatedTotal = useCalculate(m1, m2, m3, m4, m5);

   const handleSubmit = (e) => {
      e.preventDefault();
      setTotal(calculatedTotal);
   };

   return (
      <>
         <h1>User List:</h1>
         {userList.map((temp) => (
            <p key={temp.id}>{temp.name}</p>
         ))}
         <h2>Price: {price}</h2>

         <form onSubmit={handleSubmit}>
            <label>Marks1: </label>
            <input type="number" value={m1} onChange={(e) => setM1(parseInt(e.target.value))}></input>
            <br></br>
            <label>Marks2: </label>
            <input type="number" value={m2} onChange={(e) => setM2(parseInt(e.target.value))}></input>
            <br></br>
            <label>Marks3: </label>
            <input type="number" value={m3} onChange={(e) => setM3(parseInt(e.target.value))}></input>
            <br></br>
            <label>Marks4: </label>
            <input type="number" value={m4} onChange={(e) => setM4(parseInt(e.target.value))}></input>
            <br></br>
            <label>Marks5: </label>
            <input type="number" value={m5} onChange={(e) => setM5(parseInt(e.target.value))}></input>
            <br></br>
            <button type='submit'>Add</button>
         </form>
         <h2>Total: {total}</h2>
      </>
   );
};

export default HookUser;
