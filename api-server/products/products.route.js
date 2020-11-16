var express = require('express');
var router = express.Router();
const product = require('../products/products.cont')
// const backend = require('./backend.cont')
const mw = require('../middlewares/auth')


router.get('/',product.getAll)
router.post('/',product.create)
router.get('/:id',product.getOne)
router.put('/:id',product.update)
router.delete('/:id',product.delete)

module.exports = router;