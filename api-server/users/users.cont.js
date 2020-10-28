const jwt = require('jsonwebtoken');

const db = require('../db')
const {User} = db
const bcrypt = require('bcrypt');
const saltRounds = 11;
const errors = require('../errors')
const tools = require('../helper/tools')
const {DefaultError} = errors
const {Op} = require('sequelize');

exports.index = async(req,res,next)=>{
    var {page=1,limit=30,user_type,approve_status,search} = req.query;
    // console.log(req.query.user_type)
    try{
        // console.log(req.cookies)
        var where ={}

        if(search){
            var or = []
            or.push({username : {[Op.like] : '%'+search+'%' } })
            where[Op.or] = or
            // where[Op.or].push({email : {[Op.like] : '%'+search+'%' } })
        }
        if(user_type) where.user_type = user_type;
        if(approve_status) where.approve_status = approve_status;
        var options = {where,attributes: {exclude: ['password']}}
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

exports.getOne = async(req,res,next)=>{
    var id = req.params.id
    try{
        // var options = {attributes: {exclude: ['password']}}
        const user = await User.findOne({where :{id},attributes: {exclude: ['password']} })
        res.json(user)
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
            data.accept_status = 1;
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

exports.updateProfile = async(req,res,next) => {
    var data= req.body;
    const actor = req.user
    data.id = actor.id
    try{
        await updateUser(actor,data)
        res.json({success:true})
    }
    catch(err){
        next(err);
    }
}



exports.update = async(req,res,next)=>{
    var data= req.body;
    const actor = req.user
    try{
        await updateUser(actor,data)
        res.json({success:true})
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



async function updateUser  (actor,data){
    var {id,password,approve_status} = data;

    if(!id){
        throw new DefaultError(errors.FILEDS_INCOMPLETE);
    }

    delete data.id;
    delete data.username

    if(password){
        data.password = await bcrypt.hash(password, saltRounds)
    }
    else{
        delete data.password
    }
    const user = await User.findOne({where : {id}})

    if(!user){
        throw new DefaultError(errors.NOT_FOUND);
    }

    const now = new Date();
    if(approve_status == 1){
        if(actor.type === 'admin'){
            data.approve_date = now;
            data.approve_by = actor.username || actor.id
        }
        else {
            //if users try to approve themself
            throw new DefaultError(errors.PERMISSION_ERROR);
        }
    }
    else if(approve_status == 2){
        data.problem_by = actor.username || actor.id;
    }
    //Check user can't update other users
    if(actor.type === 'user' && user.id !== actor.id){
        throw new DefaultError(errors.PERMISSION_ERROR);
    }

    if(actor.type === 'admin'){
        data.updated_by_admin_date = now;
        data.updated_by_admin = actor.username || actor.id
        
    }


    await User.update(data,{where : { id}});
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

