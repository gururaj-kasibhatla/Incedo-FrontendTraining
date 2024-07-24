var express=require('express')
var connect = require('../Connection');
var app=express();
var router=express.Router();
//http://localhost:4000/users/retreiveusers
router.get('/retreiveusers',(request,response)=>
{
    connect.query('select * from users',(err,result)=>
    {
        if(err)
        {
            console.log(err)
            response.status(500).json({message:'Error in query'})
        }
        else
        {
            response.send(result);
        }});
    }
)
 
router.post('/insertUser',(request,response)=>
    {
        const{
            id,username,email
        }=request.body;
        connect.query('insert into users(id,username,email) values (?,?,?)',
            [id,username,email],(error)=>{
       
            if(error)
            {
                console.log(error);
                response.status(500).send("Error inserting records")
            }
            else{
                response.send('user creted succesfully')
            }
        });
        }
       
    );
 
router.put("/updateuser/:id",(request,response)=>
{
    const id=request.params.id;
    const {username,email}=request.body;
    connect.query('update users set username=?,email=? where id=?',
        [username,email,id],(error)=>
        {
            if(error)
            {
                response.status(500).send(error);
            }
            else{
                response.send("Data updated succesfully")
            }
        }
    );
});
 
router.delete("/deleteuser/:id",(request,response)=>
    {
        const id=request.params.id;
        connect.query('delete from users where id=?',
            [id],(error)=>
            {
                if(error)
                {
                    response.status(500).send(error);
                }
                else{
                    response.send("Data delete succesfully")
                }
            }
        );
    });
 
 
 
module.exports=router;
 