const mysql=require('mysql')
const express=require('express')
var user=require('./Controllers/UserController')
const app=express();
var bodyParser=require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/users',user);
app.listen(4000,()=>
    {
        console.log("Server started");
    }
)


