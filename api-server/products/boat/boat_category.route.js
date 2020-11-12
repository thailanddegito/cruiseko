var express = require('express');
var router = express.Router();
const boat_cate = require('./boat_category.cont')
// const backend = require('./backend.cont')
const mw = require('../../middlewares/auth')

const protect_method = ['post','put','delete']
protect_method.forEach(val => router[val]('/*',mw.jwt('admin')))

router.get('/',boat_cate.getAll)
router.get('/:id',boat_cate.getOne)


router.post('/',boat_cate.create)
router.put('/:id',boat_cate.update)
router.delete('/:id',boat_cate.delete)

module.exports = router;