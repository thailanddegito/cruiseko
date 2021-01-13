const {Review,Booking,User} = require('../db')
const tools = require('../helper/tools')
const {Op} = require('sequelize')

exports.getAll = async(req,res,next)=>{
  var {page=1,limit=25,no_limit,booking_id,product_id,user_id} = req.query;
  try{
    var where = {deleted : 0,status : 1}


    if(product_id) where.product_id = product_id;
    if(booking_id) where.booking_id = booking_id;
    if(user_id) where.user_id = user_id;

    var options = {where,order : [['createdAt','desc']] /* ,logging:console.log */}


    if(!isNaN(page) && page > 1){
      options.offset = (page-1)*parseInt(limit) ;
      
      options.limit = limit;
    }
    if(!isNaN(limit)){
        options.limit = parseInt(limit);
    }

    if(no_limit == 1){
      delete options.limit;
    }
    const reviews = await Review.findAndCountAll(options);
    res.json(reviews)
  }
  catch(err){
      next(err);
  }
}


exports.getOne = async(req,res,next)=>{
  const id = req.params.id
  try{
      const include = [
        {model : Booking},
        {model : User}
      ]
      const review = await Review.findOne({where : {id },include});
      res.json(review)
  }
  catch(err){
      next(err);
  }
}

exports.create = async(req,res,next)=>{
  var data = req.body;
  var files = req.files || {}
  try{

    if(files.image && files.image.name){
      //console.log(req.files);
      let file = files.image;
      let fileName = await tools.moveFileWithPath(file,'images')
      data.image = tools.genFileUrl(fileName,'images')
    }

    await Review.create(data)
    res.json({success:true})
  }
  catch(err){
    next(err);
  }
}

exports.update = async(req,res,next)=>{
  const id = req.params.id
  var data = req.body;
  var files = req.files || {}
  try{
    if(files.image && files.image.name){
      //console.log(req.files);
      let file = files.image;
      let fileName = await tools.moveFileWithPath(file,'images')
      data.image = tools.genFileUrl(fileName,'images')
    }

    await Review.update(data,{where : {id}})
    res.json({success:true})
  }
  catch(err){
    next(err)
  }
}

exports.delete = async(req,res,next)=>{
  const id = req.params.id
  try{
    await Review.update({deleted : 1},{where : {id}})
    res.json({success:true})
  }
  catch(err){
    next(err)
  }
}

