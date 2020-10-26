const jwt = require('jsonwebtoken');

const db = require('../db')
const {User} = db
const bcrypt = require('bcrypt');
const saltRounds = 11;
const errors = require('../errors')
const tools = require('../helper/tools')
const {DefaultError} = errors
exports.index = async(req,res,next)=>{
    var {page,limit} = req.query;
    try{
        // console.log(req.cookies)
        res.json([{id : 1}])
    }
    catch(err){
        next(err);
    }
}

exports.login = async(req,res,next)=>{
    var data = req.body;
    var {username,password} = data;
    try{
        if(!username || !password){
            throw new DefaultError(errors.FILEDS_INCOMPLETE);
        }

        const user = await User.findOne({where : { username}})

        if(!user){
            throw new DefaultError(errors.INVALID_EMAIL);
        }
        const match = await bcrypt.compare(password, user.password);
        if(!match){
            throw new DefaultError(errors.INVALID_PASSWORD);
        }
        const token = generateToken(user)
        res.json({success :true , token ,user_id : user.id})

    }
    catch(err){
        next(err);
    }
}



exports.register = async(req,res,next)=>{
    var data = req.body;
    var {username,password,company_type,user_type} = data;
    var files = req.files || {}
    try{
        
        if(files.image && files.image.name){
            //console.log(req.files);
            fileName = await tools.moveFileWithPath(files.image,'images')
        }
        
        const hash = await bcrypt.hash(password, saltRounds)
    }
    catch(err){
        next(err);
    }
}



exports.update = async(req,res,next)=>{
    try{

    }
    catch(err){
        next(err);
    }
}

exports.delete = async(req,res,next)=>{
    try{

    }
    catch(err){
        next(err);
    }
}

exports.checkEmail = async(req,res,next)=>{
    const {email} = req.body;
    try{
        if(!email){
            throw new DefaultError(errors.FILEDS_INCOMPLETE);
        }

        const user = await User.findOne({where : {email },attributes : ['email']})

        res.json({duplicated : !!user })
    }
    catch(err){
        next(err);
    }
}


function generateToken(user){
    // console.log('generating token user  :'+user.id);
    return jwt.sign({ id: user.id, email: user.email,user_type : user.user_type,type:'user'}, process.env.USER_SECRET_KEY);
    //return token = jwt.sign({ id: user.id, email: user.email}, config.SECRET_KEY, { expiresIn: config.token_expire });
}