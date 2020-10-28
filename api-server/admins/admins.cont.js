const jwt = require('jsonwebtoken');

const db = require('../db')
const {Admin,Role,RoleHasPermission,Permission} = db
const bcrypt = require('bcrypt');
const saltRounds = 11;
const errors = require('../errors')
const tools = require('../helper/tools');
const { Op } = require('sequelize');
const {DefaultError} = errors


exports.getAll = async(req,res,next)=>{
    var {page=1,limit=30,search} = req.query;
    // console.log(req.query.user_type)
    try{
        // console.log(req.cookies)
        var where ={role_id : {[Op.ne] : 0}}

        if(search){
            var or = []
            or.push({username : {[Op.like] : '%'+search+'%' } })
            or.push({email : {[Op.like] : '%'+search+'%' } })
            where[Op.or] = or
        }
        // if(user_type) where.user_type = user_type;
        // if(accept_status) where.accept_status = accept_status;
        var options = {where,attributes: {exclude: ['password']}}
        if(!isNaN(page) && page !=0){
            if(parseInt(page) > 1)
                options.offset = (parseInt(page) -1)* parseInt(limit);
            
            options.limit = parseInt(limit);
        }
        if(!isNaN(limit)){
            options.limit = parseInt(limit);
        }
        const admins = await Admin.findAndCountAll(options )
        res.json(admins)
    }
    catch(err){
        next(err);
    }
}

exports.getOne = async(req,res,next)=>{

    var id = req.params.id
    try{
        // var options = {attributes: {exclude: ['password']}}
        const attributes = {exclude : ['password']}
        const include = [{model : Role , include: [RoleHasPermission]}]
        const admin = await Admin.findOne({where :{id},attributes,include })
        res.json(admin)
    }
    catch(err){
        next(err);
    }
}

exports.profile = async(req,res,next)=>{
    const user = req.user;
    //console.log(user);
    try{
        // console.log('aa')
        const attributes = {exclude : ['password','createdAt','updatedAt','username']}
        const include = [{model : Role , include: [RoleHasPermission]}]
        const _user = await Admin.findOne({where : {id:user.id},include,attributes })
        // console.log(_user)
        res.json(_user);
    }
    catch(err){

    }
}


exports.login = async(req,res,next)=>{
    var data = req.body;
    var {username,password} = data;
    try{
        if(!username || !password){
            throw new DefaultError(errors.FILEDS_INCOMPLETE);
        }

        const admin = await Admin.findOne({where : { username}})

        if(!admin){
            throw new DefaultError(errors.INVALID_EMAIL);
        }
        const match = await bcrypt.compare(password, admin.password);
        if(!match){
            throw new DefaultError(errors.INVALID_PASSWORD);
        }
        const token = generateToken(admin)
        res.json({success :true , token ,admin_id : admin.id})

    }
    catch(err){
        next(err);
    }
}


exports.create = async(req,res,next)=>{
    var data = req.body;
    var {username,email,password} = data;
    try{
        if(!username || !email || !password){
            throw new DefaultError(errors.FILEDS_INCOMPLETE);
        }

        const [check_email,check_username] = await Promise.all([checkEmail(email),checkUsername(username) ])

        if(check_email){
            throw new DefaultError(errors.DUPLICATED_EMAIL);
        }
        if(check_username){
            throw new DefaultError(errors.DUPLICATED_USERNAME);
        }

        const hash = await bcrypt.hash(password, saltRounds)

        data.password = hash

        await Admin.create(data)

        res.json({success:true})

    }
    catch(err){
        next(err);
    }
}


exports.update = async(req,res,next)=>{
    var id = req.params.id
    var data = req.body;
    var {password} = data;
    try{
        if(password){
            data.password = await bcrypt.hash(password, saltRounds);
        }
        else{
            delete data.password
        }
        
        delete data.email
        delete data.username

        const user = await Admin.update(data,{where:{id}})
        res.json(user);
    }
    catch(err){
        next(err);
    }
}


exports.delete = async(req,res,next)=>{
    var id = req.params.id
    try{
        await Admin.destroy({where : { id}})
        res.json({success:true})
    }
    catch(err){
        next(err);
    }
}




// exports.getAll = async(req,res,next)=>{
//     try{

//     }
//     catch(err){
//         next(err);
//     }
// }


exports.getRole = async(req,res,next)=>{
    try{
        const roles = await Role.findAll();
        res.json(roles)
    }
    catch(err){
        next(err);
    }
  }
  
  exports.getRoleOne = async(req,res,next)=>{
    const id = req.params.id;
    try{
        const roles = await Role.findOne({where:{id},include:[RoleHasPermission]});
        res.json(roles)
    }
    catch(err){
        next(err);
    }
  }
  
  exports.createRole = async(req,res,next)=>{
    const {name,permission,level} = req.body;
    // console.log(permission);
    try{

        const roles = await Role.create({name,level});
        const {id} = roles
        let role_id = id
        for (const item of permission) {
           await RoleHasPermission.create({role_id,permission_id:item})
        }
        res.json({success:true})
    }
    catch(err){
        next(err);
    }
  }
  
  
exports.updateRole = async(req,res,next)=>{
    const {id,name,permission} = req.body;
    // let task=[]
    try{
        // console.log('id', id)
        await Role.update({name,level},{where:{id}})
        // task.push(roles)
        await RoleHasPermission.destroy({where:{role_id:id}})
        // task.push(rolesPermission)
        for (const item of permission) {
            await RoleHasPermission.create({role_id:id,permission_id:item})
        }
        res.json({success:true})
    }
    catch(err){
        next(err);
    }
}
  
exports.delRole = async(req,res,next)=>{
    const id = req.params.id;
    try{
        await Role.destroy({where:{id}})
        res.json({success:true})
    }
    catch(err){
        next(err);
    }
}


exports.getPermission = async(req,res,next)=>{
    try{
        const permissions = await Permission.findAll();
        res.json(permissions)
    }
    catch(err){
        next(err);
    }
}
  
exports.getPermissionOne = async(req,res,next)=>{
    const id = req.params.id;
    try{
        const permissions = await Permission.findOne({where:{id}});
        res.json(permissions)
    }
    catch(err){
        next(err);
    }
}
  
exports.createPermission = async(req,res,next)=>{
    const data = req.body;
    // console.log(data);
    try{
        const permissions = await Permission.create(data);
        res.json(permissions);
    }
    catch(err){
        next(err);
    }
}
  
  
exports.updatePermission = async(req,res,next)=>{
    const data = req.body;
    const id = data.id;
    try{
        const permissions = await Permission.update(data,{where:{id}})
        res.json(permissions);
    }
    catch(err){
        next(err);
    }
}
  
exports.delPermission = async(req,res,next)=>{
    const id = req.params.id;
    try{
        await Permission.destroy({where:{id}})
        res.json({success:true})
    }
    catch(err){
        next(err);
    }
}

function generateToken(user){
    // console.log('generating token user  :'+user.id);
    return jwt.sign({ id: user.id, email: user.email,username : user.username,type:'admin'}, process.env.ADMIN_SECRET_KEY );
    //return token = jwt.sign({ id: user.id, email: user.email}, config.SECRET_KEY, { expiresIn: config.token_expire });
}




async function checkEmail (email){
    const admin = await Admin.findOne({where : {email },attributes : ['email']})
    return !!admin
}
async function checkUsername (username){
    const admin = await Admin.findOne({where : {username },attributes : ['username']})
    return !!admin
}