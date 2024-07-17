const express=require('express')
const app=express();
var product=require('./EmployeeAPI/ProductController')
var employee=require('./EmployeeAPI/EmployeeController')
app.use("/employee",employee);
app.use("/product",product);
app.listen(5000,(request,response)=>
{
    console.log("Server started on http://localhost:5000");
})
/*
http://localhost:4000/employee/retreive
http://localhost:4000/product/retreive
*/

