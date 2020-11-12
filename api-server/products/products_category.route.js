var express = require('express');
var router = express.Router();
const product_cate = require('./products_category.cont')
// const backend = require('./backend.cont')
const mw = require('../middlewares/auth')

const protect_method = ['post','put','delete']
protect_method.forEach(val => router[val]('/*',mw.jwt('admin')))

router.get('/',product_cate.getAll)
router.get('/:id',product_cate.getOne)


router.post('/',product_cate.create)
router.put('/:id',product_cate.update)
router.delete('/:id',product_cate.delete)

module.exports = router;