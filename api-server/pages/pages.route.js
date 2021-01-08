var express = require('express');
var router = express.Router();
const page = require('./pages.cont')
// const backend = require('./backend.cont')
const mw = require('../middlewares/auth')

const protect_method = ['post','put','delete']
protect_method.forEach(val => router[val]('/*',mw.jwt('admin')))


router.get('/widgets',page.getAllWidget)
router.get('/widgets/:wid',page.getOneWidget)
router.put('/widgets/:wid',page.updateWidget)
router.delete('/widgets/:wid',page.deleteWidget)

router.get('/',page.getAll)
router.get('/:id',page.getOne)


router.post('/',page.create)
router.put('/:id',page.update)
router.delete('/:id',page.delete)

module.exports = router;