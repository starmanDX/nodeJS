const express = require('express'),
    rootDir = require('../util/path.js'),
    path = require('path'),
    router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;