var express = require('express');
var router = express.Router();
const admin  = require('../admins/admins.cont')
const mw = require('../middlewares/auth')

// const meb = require('../utils/meb')

// router.post('/register',user.register)

// router.post('/check-email',cont.checkEmail)
// router.post('/login',cont.login)
// router.post('/register',cont.register)
// router.post('/gen-id',cont.genUserId)


// router.get('/profile',mw.jwt('admin'),cont.profile)
router.post('/admin/login',admin.login)
router.use('/admin*',mw.jwt('admin'))
router.get('/admin',admin.getAll)
router.post('/admin',admin.create)
router.get('/admin/:id',admin.getOne)

router.put('/admin/:id',admin.update)
router.delete('/admin/:id',admin.delete)

module.exports = router;