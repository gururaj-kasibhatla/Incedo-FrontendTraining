var mysql=require('mysql')
const connection=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'admin',
        database:'ExpressCrud'
    }
);
connection.connect((error)=>
{
    if(error)
    {
        console.log("Error is "+error);
    }
    else{
        console.log("Connected to Database");
    }
})
module.exports=connection;
