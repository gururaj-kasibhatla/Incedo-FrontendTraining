var url = require('url');
var address = 'http://localhost:5050/hello.html?firstname=qwqwrqe&lastname=asdfgh';

function show() {
    var add = url.parse(address, true);
    console.log('firstname:', add.query.firstname);
    console.log('lastname:', add.query.lastname);
    console.log('hostname:', add.hostname);
    console.log('pathname:', add.pathname);
    console.log('port:', add.port);
}

show();
