const express = require('express'),
    path = require('path'),
    adminController = require('../controllers/admin'),
    router = express.Router();

router.get('/add-product', adminController.getAddProduct);
router.get('/products', adminController.getProducts);
router.post('/add-product', adminController.postAddProduct);

exports.routes = router;