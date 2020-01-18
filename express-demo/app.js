const express = require('express'),
    expressHbs = require('express-handlebars'),
    path = require('path'),
    rootDir = require('./util/path.js'),
    bodyParser = require('body-parser'),
    adminData = require('./routes/admin.js'),
    shopRoutes = require('./routes/shop.js'),
    app = express();

app.engine('hbs', expressHbs({
    layoutsDir: 'views/layouts', defaultLayout: 'main-layout', extname: 'hbs'}));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminData.routes);
app.use(shopRoutes);
app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
})


app.listen(3000);