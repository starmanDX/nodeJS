const express = require('express'),
    rootDir = require('../util/path.js'),
    path = require('path'),
    products = [],
    router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });

});

router.post('/add-product', (req, res, next) => {
    products.push({
        title: req.body.title
    });
    res.redirect('/');
});

exports.routes = router;
exports.products = products;