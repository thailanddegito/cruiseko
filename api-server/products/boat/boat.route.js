var express = require('express');
var router = express.Router();
const boat = require('./boat.cont')
// const backend = require('./backend.cont')
const mw = require('../../middlewares/auth')

const protect_method = ['post','put','delete']

protect_method.forEach(val => router[val]('/*',mw.jwt('admin')))

// router.use((req,res,next) =>{
//     if(protect_method.includes(req.method)) mw.jwt('admin')(req,res,next)
//     else next()
// })
// protect_method.forEach(val => console.log(val))


router.get('/',boat.getAll)
router.get('/:id',boat.getOne)

// router.use(mw.jwt('admin'))

router.post('/',boat.create)
router.put('/:id',boat.update)
router.delete('/:id',boat.delete)

router.post('/:boat_id/images',boat.createImage)
router.put('/:boat_id/images/:id',boat.updateImage)
router.delete('/:boat_id/images/:id',boat.deleteImage)


module.exports = router;