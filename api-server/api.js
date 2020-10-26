const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const db = require('./db')
const fileUpload = require('express-fileupload')

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({
    // useTempFiles : true,
    
    limits: { fileSize: 50 * 1024 * 1024 },
}));

app.use('/users',require('./users/users.route'))

app.get('/test',(req,res) => res.send('test'))

app.get('*',(req,res)=>{
    res.send({error : 'InvalidEndpoint'})
})



app.use(function (err, req, res, next) {
    console.log(err);
    if(err.name)
        res.status(400).json({ success : false , error : err.name})
    else
        return res.status(500).end();
})


module.exports = app;