var fs = require('fs');
var http = require('http');

http.createServer((req, res) => {
    // Open and create a new file
    fs.open('Demo.txt', 'w', (error, fd) => {
        if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error creating file');
            console.log('Error creating file:', error);
            return;
        }

        console.log('File created');

        // Write data to the created file
        fs.writeFile('Demo.txt', 'Text from JS file', (error) => {
            if (error) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error writing to file');
                console.log('Error writing to file:', error);
                return;
            }

            console.log('Data saved');

            // Append data to the file
            fs.appendFile('Demo.txt', 'appended content', (error) => {
                if (error) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error appending to file');
                    console.log('Error appending to file:', error);
                    return;
                }

                console.log('Data appended');

                // Send response after all file operations are done
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('File created, data saved, and data appended successfully');
            });
        });
    });
}).listen(7070, () => {
    console.log('Server started from file');
});
