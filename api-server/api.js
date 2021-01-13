const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
// const db = require('./db')
const fileUpload = require('express-fileupload')
const tools = require('./helper/tools')

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({
    // useTempFiles : true,
    
    limits: { fileSize: 50 * 1024 * 1024 },
}));

app.use('/users',require('./users/users.route'))
app.use('/products',require('./products/products.route'))
app.use('/booking',require('./booking/booking.route'))
app.use('/products-category',require('./products/products_category.route'))
app.use('/backend',require('./backend/backend.route'))
app.use('/boat',require('./products/boat/boat.route'))
app.use('/boat-category',require('./products/boat/boat_category.route'))
app.use('/auth',require('./auth/auth.route'))
app.use('/blog',require('./blog/blog.route'))
app.use('/location',require('./location/location.route'))
app.use('/pages',require('./pages/pages.route'))
app.use('/review',require('./review/review.route'))

app.get('/test',(req,res) => res.send('test'))

app.post('/ck-upload',async (req,res)=>{
    //console.log(req.files.upload);
    
    // var names = file.name.split('.')
    // const {base_domain} = tools
    // if(names.length < 2){
    //     return res.json({error :{uploaded: 0,message : 'Upload file error'}} )
    // }
    // var fileName = `${Date.now()}.${names[names.length-1]}`;
    // console.log('uploading file...')
    try{
        const file = req.files.upload;
        let fileName = await tools.moveFileWithPath(file,'upload/images')
        var url = tools.genFileUrl(fileName,'upload/images')
        res.json({url})
    }
    catch(err){
        // console.log(err)
        res.json({
            error: {
                message: err.name || err.message
            }})
    }
    
    //return res.json(req.body);
  })

app.get('*',(req,res)=>{
    res.send({error : 'InvalidEndpoint'})
})



app.use(function (err, req, res, next) {
    // console.log(process.env.NODE_ENV)
    if(process.env.NODE_ENV !== 'test')
        console.log(err);
    if(err.name)
        res.status(400).json({ success : false , error : err.name})
    else
        return res.status(500).end();
})


module.exports = app;