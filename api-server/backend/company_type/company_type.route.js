var express = require('express');
var router = express.Router();
const com = require('./company_type.cont')
// const backend = require('./backend.cont')
// const mw = require('../../middlewares/auth')


router.get('/',com.getAll)

router.post('/',com.create)
router.get('/:id',com.getOne)
router.put('/:id',com.update)
router.delete('/:id',com.delete)
router.post('/order',com.updateOrder)

module.exports = router;