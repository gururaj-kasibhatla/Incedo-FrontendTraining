//Retreive the path of application check the pathname if it is about it should display welome to aboutus page,
// if it is home it should display welcome to home page ,
// if it is employee it should display welcome to employee module


var http=require('http')
const url= require('url')

http.createServer((req,res)=>{
    const parseUrl=url.parse(req.url,true);
    const pathName=parseUrl.pathname;
    res.writeHead(200,{'Content-Type':'text/html'})
    if(pathName==='/about'){
        res.write('<h2>welcome to about us page </h2>')
    }
    else if(pathName==='/home'){
        res.write('<h2>welcome to home page </h2>')
    }
    else if(pathName==='/employee'){
        res.write('<h2>welcome to employee module</h2>')
    }
    else{
        res.write('page not found')
    }
}).listen(5050,()=>{console.log('server started')})