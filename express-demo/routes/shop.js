const express = require('express'),
    rootDir = require('../util/path.js'),
    path = require('path'),
    adminData = require('./admin'),
    router = express.Router();

router.get('/', (req, res) => {
    const products = adminData.products;
    res.render('shop', {products: products, pageTitle: 'Shop', path: '/'});
});

module.exports = router;