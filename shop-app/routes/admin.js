const express = require('express'),
    path = require('path'),
    productsController = require('../controllers/products'),
    router = express.Router();

router.get('/add-product', productsController.getAddProduct);

router.post('/add-product', productsController.postAddProduct);

exports.routes = router;