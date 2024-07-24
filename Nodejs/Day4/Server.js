var express=require('express')
var path=require('path');
var bodyParser=require('body-parser')
var home=require('./Controllers/WelcomeController')
var employee=require('./Controllers/EmployeeController')
const app=express();
app.set('view engine','ejs')
app.set("views", path.join(__dirname,"/result"));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use("/welcome",home);
app.use("/employee",employee)
app.listen(5000,()=>
{
console.log("Server started on 5000 port number");
})
