const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    adminRoutes = require('./routes/admin'),
    shopRoutes = require('./routes/shop'),
    errorController = require('./controllers/error')
    app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);
app.use(errorController.get404);


app.listen(3000);