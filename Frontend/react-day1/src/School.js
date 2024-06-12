import Student from "./Student";
import Trainer from "./Trainer";
function School(){
    var trainersList=[
        {
           name:"Trainer1", 
           topic:"react"
        },
        {
            name:"Trainer2", 
            topic:"java"
        }
    ];
    
    return (<div>
        <h1> Some School</h1>
        <h2> its syllabus</h2>
        <Student name="name1" age="11"/>
        <Student name="name2" age="12"/>
        <Student name="name3" age="13"/>
        <Student name="name4" age="14"/>
        <Student name="name5" age="15"/>
        {
            trainersList.map((temp)=>(<Trainer name={temp.name} topic={temp.topic}/>))
        }
    </div>)
}
export default School;