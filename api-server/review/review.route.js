var express = require('express');
var router = express.Router();
const review = require('./review.cont')
// const backend = require('./backend.cont')
const mw = require('../middlewares/auth')



router.get('/',review.getAll)
router.get('/:id',review.getOne)

router.use('/*',mw.jwt(['user','admin']))

router.post('/',review.create)
router.put('/:id',review.update)
router.delete('/:id',review.delete)

module.exports = router;