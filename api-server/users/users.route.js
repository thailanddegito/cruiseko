var express = require('express');
var router = express.Router();
const cont  = require('./users.cont')

// const meb = require('../utils/meb')

// router.post('/register',user.register)

router.post('/check-email',cont.checkEmail)
router.post('/login',cont.login)
router.post('/register',cont.register)
router.put('/:id',cont.update)
router.delete('/:id',cont.delete)

router.get('/',cont.index)

module.exports = router;