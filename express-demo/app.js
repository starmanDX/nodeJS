const express   = require('express'),
    app         = express();

app.use('/users', (req, res) => {
    res.send("This is the Users page")
});
app.use('/', (req, res) => {
    res.send('<h1>Hello From Express</h1>')
});

app.listen(3000);