const express = require('express'),
    path = require('path'),
    rootDir = require('./util/path.js'),
    bodyParser = require('body-parser'),
    adminRoutes = require('./routes/admin.js'),
    shopRoutes = require('./routes/shop.js'),
    app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})


app.listen(3000);