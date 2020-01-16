//RAW NODE.JS LOGIC
//-----------------

//REQUIRE MODULES
const http = require('http');
const routes = require('./routes');

//CREATES THE SERVER USING THE ROUTES CREATED IN
//THE ROUTES FILE
const server = http.createServer(routes);

//TELLS THE SERVER TO LISTEN ON PORT 3000
server.listen(3000)