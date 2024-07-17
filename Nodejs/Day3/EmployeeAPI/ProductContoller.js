var express=require('express')
var app=express();
var router=express.Router();
var bodyParser=require('body-parser')
router.get('/retreive',(request,response)=>
{
    response.status(200).json({message:'RetreivingData'})
});
router.post('/insert',(request,response)=>
{
    response.status(201).json({message:'Data inserted'})
})
module.exports=router;
