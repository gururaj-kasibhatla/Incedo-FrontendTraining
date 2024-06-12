import { useState } from "react"
import UserProfile from "./UserProfile"

function UserForm(){
    var [name,setName]=useState('')
    var [email,setEmail]=useState('')
    var [bio,setBio]=useState('')
    var[list,setList]=useState([])
    var addUser=(e)=>{
      e.preventDefault();
      var tempUser={
        name:name,
        email:email,
        bio:bio
      }
      console.log(tempUser)
      setList([...list,tempUser])
      console.log(list)
      setName('');
      setEmail('');
      setBio('');
    }
    return(
        <div>
            <form onSubmit={(e)=>{addUser(e)}}>
                <label>Name</label>
                <input required type="text" value={name} onChange={e=>{setName(e.target.value)}}/>
                <br></br>
                <label>Email</label>
                <input required type="email" value={email} onChange={e=>{setEmail(e.target.value)}}/>
                <br></br>
                <label>Bio</label>
                <input required type="text" value={bio} onChange={e=>{setBio(e.target.value)}}/>
                <br></br>
                <button type="submit">Add</button>
            </form>
            {
                list.map((temp,index)=>(<UserProfile key={index} name={temp.name} email={temp.email} bio={temp.bio}/>))
            }
        </div>
    )
}
export default UserForm;