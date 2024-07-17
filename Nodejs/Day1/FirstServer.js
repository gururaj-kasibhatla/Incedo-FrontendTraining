var http = require('http');
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    var val = 10;
    res.write(`<h1>Server started</h1> ${val}`);
    res.end();
}).listen(8080, () => {
    console.log('server started');
});
