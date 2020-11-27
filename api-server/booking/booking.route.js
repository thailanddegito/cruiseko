var express = require('express');
var router = express.Router();
const booking = require('./booking.cont')
// const backend = require('./backend.cont')
// const mw = require('../../middlewares/auth')

const protect_method = ['post','put','delete']
protect_method.forEach(val => router[val]('/*',mw.jwt('admin')))

router.get('/',booking.getAll)

router.post('/',booking.create)
router.get('/:id',booking.getOne)
router.put('/:id',booking.update)
// router.delete('/:id',com.delete)
// router.post('/order',com.updateOrder)

module.exports = router;