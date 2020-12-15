var express = require('express');
var router = express.Router();
const loc = require('./location.cont')
// const backend = require('./backend.cont')
const mw = require('../middlewares/auth')

const protect_method = ['post','put','delete']
protect_method.forEach(val => router[val]('/*',mw.jwt('admin')))

router.get('/',loc.getAll)
router.get('/:id',loc.getOne)


router.post('/',loc.create)
router.put('/:id',loc.update)
router.delete('/:id',loc.delete)

module.exports = router;