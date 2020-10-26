const jwt = require('jsonwebtoken');



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
    var {email,password} = data;
    try{

    }
    catch(err){
        next(err);
    }
}



exports.register = async(req,res,next)=>{
    try{

    }
    catch(err){

    }
}

exports.update = async(req,res,next)=>{
    try{

    }
    catch(err){

    }
}

exports.delete = async(req,res,next)=>{
    try{

    }
    catch(err){

    }
}


function generateToken(user){
    // console.log('generating token user  :'+user.id);
    return jwt.sign({ id: user.id, email: user.email,type:'user'}, process.env.USER_SECRET_KEY);
    //return token = jwt.sign({ id: user.id, email: user.email}, config.SECRET_KEY, { expiresIn: config.token_expire });
}