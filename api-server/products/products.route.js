var express = require('express');
var router = express.Router();
const product = require('../products/products.cont')
// const backend = require('./backend.cont')
const mw = require('../middlewares/auth')


router.get('/',product.getAll)

module.exports = router;