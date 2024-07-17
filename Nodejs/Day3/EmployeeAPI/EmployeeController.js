//insertEmploee
const express=require('express')
var router=express.Router();
const bodyParser=require('body-parser')
const app=express();
app.use(bodyParser.json());//app.use can be used to specify settings which has to be used globally in
let employees=
[
    {
        id:1,empname:'John',salary:80000
    },
    {
        id:2,empname:"Anshita",salary:87000
    }
]
/*
get-can be used to retreive data
post-to insert data
put-to update data
delete-to delete anydata
*/
router.get('/retreive',(req,res)=>
{
        console.log("coming here");
    res.json(employees);
})
//http://localhost:5500/employees/2
router.get('/employees/:id',(request,response)=>
{
    const id=parseInt(request.params.id);
    const employee=employees.find((e)=>e.id===id);
    if(employee)
    {
        response.json(employee);
    }else
    {
        response.status(404).json({error:'Employee Not Found'})
    }


})
router.post("/insertEmploee",(request,response)=>
{
    const newEmployee={
        id:request.body.id,
        empname:request.body.empname,
        salary:request.body.salary


    }
    employees.push(newEmployee)
    response.status(201).json(newEmployee);
   
})
router.put("/updateData/:id",(request,response)=>
{
    const id=parseInt(request.params.id);
   const employee= employees.find(e=>e.id===id);
   if(employee)
   {
    employee.salary=request.body.salary;
    response.status(201).json(employee);
    //console.log("Data updated");
   }
   else
   {
    response.status(404).json({error:'Employee Not Found'});
   }






})
router.delete("/deleteData/:id",(request,response)=>
{
    const id=parseInt(request.params.id);
    const index=employees.findIndex(e=>
    {
        e.id===id;
       
    })
    if(index!==-1)
    {
        employees.splice(index,1);
        response.status(204).end();


    }
    else
    {
        response.status(404).json({error:'Employee Not Found'});
    }
   




})
module.exports=router;
