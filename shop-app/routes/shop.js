const express = require('express'),
    path = require('path'),
    productsController = require('../controllers/products'),
    router = express.Router();

router.get('/', productsController.getProducts);

module.exports = router;