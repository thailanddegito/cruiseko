var express = require('express');
var router = express.Router();
const blog = require('./blog.cont')
// const backend = require('./backend.cont')
const mw = require('../middlewares/auth')

const protect_method_admin = ['post','put','delete']
protect_method_admin.forEach(val => router[val]('/*',mw.jwt('admin')))

router.get('/category',blog.getAllCate)

router.post('/category',blog.createCate)
router.get('/category/:id',blog.getOneCate)
router.put('/category/:id',blog.updateCate)
router.delete('/category/:id',blog.deleteCate)


router.get('/',blog.getAll)

router.post('/',blog.create)
router.get('/:id',blog.getOne)
router.put('/:id',blog.update)
router.delete('/:id',blog.delete)
// router.post('/order',com.updateOrder)

module.exports = router;