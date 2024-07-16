var http=require('http')
const url= require('url')

http.createServer((req,res)=>{
    const parseUrl=url.parse(req.url,true);
    const pathName=parseUrl.pathname;
    const query=parseUrl.query;
    res.writeHead(200,{'Content-Type':'text/html'})

    if(pathName==='/'){
        res.write('<h2>welcome to main page </h2>')
    }
    else   if(pathName==='/welcome'){
        const mes=query.message||'Good Morning'
        res.write(`Hello ${mes}`)
    }
    else{
        Response.write('page not found')
    }
}).listen(5050,()=>{console.log('server started')})