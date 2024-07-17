var fs = require('fs');
var http = require('http');

http.createServer((req, res) => {
    fs.readFile('Hello.txt', (error, data) => {
        if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.write('Error reading file');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
        }
        res.end();
    });
}).listen(7070, () => {
    console.log('Server started from file');
});
