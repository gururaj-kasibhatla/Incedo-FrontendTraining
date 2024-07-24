var express=require('express');
var router=express.Router();
var employees=[];
router.get("/newEmployee",(request,response)=>
{
    response.render("NewEmployee");
})


router.post("/insertEmployee",(request,response)=>
{
    console.log("coming here");


    const newEmployee={
        id:request.body.ecode,
        name:request.body.ename,
        salary:request.body.salary


    }
    employees.push(newEmployee);
    response.redirect("/employee/index");
})
router.get("/index",(request,response)=>
{
    response.json(employees);
})
module.exports=router;
