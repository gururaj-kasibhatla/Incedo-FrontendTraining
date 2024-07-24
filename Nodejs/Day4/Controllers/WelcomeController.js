var express=require('express')
var router=express.Router();
router.get('/index',(req,res)=>{
    res.render("hello")
    //will search for index.ejs in views folder
})
module.exports=router
