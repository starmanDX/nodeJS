//REQUIRES THE HTTP MODULE
const http = require('http');

//CREATES THE SERVER, WHICH SENDS HTML AS A RESPONSE
//TO A CONNECTION REQUEST
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
    res.write('</html>');
    res.end();
})

//TELLS THE SERVER TO LISTEN ON PORT 3000
server.listen(3000)