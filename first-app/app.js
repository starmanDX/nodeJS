//RAW NODE.JS LOGIC
//-----------------

//REQUIRE MODULES
const http = require('http');
const fs = require('fs');

//CREATES THE SERVER, WHICH SENDS HTML AS A RESPONSE
//TO A CONNECTION REQUEST
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    //IF REQUEST IS TO '/', SEND A FORM
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    //IF REQUEST IS TO '/MESSAGE', CREATE MESSAGE.TXT
    //FILE AND REDIRECT TO '/'
    if (url === '/message' && method === 'POST') {
        //CREATES A BODY ARRAY AND PUSHES
        //A DATA CHUNK ONTO IT EACH TIME ONE IS
        //PARSED
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        //ON END OF REQUEST, CREATES A NEW BUFFER
        //AND ADDS ALL BODY CHUNKS TO IT
        return req.on('end', () => {
            //CHANGES THE BUFFER TO A STRING
            const parsedBody = Buffer.concat(body).toString();
            //SEPARATES THE VALUE OF MESSSAGE FROM THE KEY
            const message = parsedBody.split('=')[1];
            //WRITES THE MESSAGE VALUE TO MESSAGE.TXT
            //AND REDIRECTS ONCE COMPLETE
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    };
    //IF REQUEST IS ANYWHERE ELSE, SEND FIRST PAGE
    //console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
    res.write('</html>');
    res.end();
});

//TELLS THE SERVER TO LISTEN ON PORT 3000
server.listen(3000)