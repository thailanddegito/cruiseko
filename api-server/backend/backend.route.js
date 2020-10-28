var express = require('express');
var router = express.Router();
const admin  = require('../admins/admins.cont')
const backend = require('./backend.cont')
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
router.get('/admin/profile',admin.profile)
router.get('/admin/:id',admin.getOne)

router.put('/admin/:id',admin.update)
router.delete('/admin/:id',admin.delete)


router.get('/roles',admin.getRole)
router.get('/roles/:id',admin.getRoleOne)
router.post('/roles',admin.createRole)
router.post('/roles/update',admin.updateRole)
router.delete('/roles/:id',admin.delRole)

router.get('/permission',admin.getPermission)
router.get('/permission/:id',admin.getPermissionOne)
router.post('/permission',admin.createPermission)
router.post('/permission/update',admin.updatePermission)
router.delete('/permission/:id',admin.delPermission)

router.get('/count',backend.countBackend)

module.exports = router;