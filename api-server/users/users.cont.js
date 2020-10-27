const jwt = require('jsonwebtoken');

const db = require('../db')
const {User} = db
const bcrypt = require('bcrypt');
const saltRounds = 11;
const errors = require('../errors')
const tools = require('../helper/tools')
const {DefaultError} = errors
exports.index = async(req,res,next)=>{
    var {page=1,limit=30} = req.query;
    try{
        // console.log(req.cookies)
        var options = {}
        if(!isNaN(page) && page !=0){
            if(parseInt(page) > 1)
                options.offset = (page-1)*limit;
            
            options.limit = limit;
        }
        if(!isNaN(limit)){
            options.limit = parseInt(limit);
        }
        const users = await User.findAndCountAll(options )
        res.json(users)
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
    // var image_logo,image_license;
    try{
        
        if(files.image_logo && files.image_logo.name){
            //console.log(req.files);
            let file = files.image_logo;
            let fileName = await tools.moveFileWithPath(file,'images')
            data.image_logo = tools.genFileUrl(fileName,'images')
        }
        if(files.image_license && files.image_license.name){
            let file = files.image_license;
            let fileName = await tools.moveFileWithPath(file,'images')
            data.image_license = tools.genFileUrl(fileName,'images')
        }

        if(!username || !password || !user_type ){
            throw new DefaultError(errors.FILEDS_INCOMPLETE);
        }

        if(await checkEmail(username)){
            throw new DefaultError(errors.DUPLICATED_EMAIL);
        }

        if(user_type === 'fit'){
            data.id = await tools.genUserId(user_type)
        }


        
        const hash = await bcrypt.hash(password, saltRounds)

        data.password = hash

        const user = await User.create(data)

        res.json({success:true})
    }
    catch(err){
        next(err);
    }
}

// bcrypt.hash('123456', saltRounds).then(result => console.log(result))



exports.profile = async(req,res,next)=>{
    const user = req.user;
    try{
        const _user = await User.findOne({where : { id : user.id},attributes: {exclude: ['password']} })
        res.json(_user)
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

        const found = await checkEmail(email)

        res.json({duplicated : !!found })
    }
    catch(err){
        next(err);
    }
}

exports.genUserId = async(req,res,next)=>{
    var {type} = req.body;
    console.log(req.body)
    try{
        if(!type){
            throw new DefaultError(errors.FILEDS_INCOMPLETE);
        }
        

        const id = await tools.genUserId(type)

        res.json({id  })
    }
    catch(err){
        next(err);
    }
}


async function checkEmail (email){
    const user = await User.findOne({where : {email },attributes : ['email']})
    return !!user
}


function generateToken(user){
    // console.log('generating token user  :'+user.id);
    return jwt.sign({ id: user.id, email: user.email,user_type : user.user_type,type:'user'}, process.env.USER_SECRET_KEY );
    //return token = jwt.sign({ id: user.id, email: user.email}, config.SECRET_KEY, { expiresIn: config.token_expire });
}

