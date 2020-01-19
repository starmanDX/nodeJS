const express = require('express'),
    path = require('path'),
    rootDir = require('./util/path.js'),
    bodyParser = require('body-parser'),
    adminData = require('./routes/admin.js'),
    shopRoutes = require('./routes/shop.js'),
    app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminData.routes);
app.use(shopRoutes);
app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found', path: ""});
})


app.listen(3000);