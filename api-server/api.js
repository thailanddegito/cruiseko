const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/users',require('./users/users.route'))

app.get('/test',(req,res) => res.send('test'))

app.get('*',(req,res)=>{
    res.send({error : 'InvalidEndpoint'})
})




module.exports = app;