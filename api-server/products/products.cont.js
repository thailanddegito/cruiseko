const {User} = require('../db')
const tools = require('../helper/tools')
const errors = require('../errors')
const {DefaultError} = errors

exports.getAll = async(req,res,next)=>{
  try{
      
  }
  catch(err){
      next(err);
  }
}

exports.create = async(req,res,next)=>{
  var data = req.body;
  var {method = 'draft'} = data;
  var files = req.files || {}
  try{
    if(files.images){
      var images = files.images
      if(!Array.isArray(files.images))  images = [images]
      
    }
    if(files.image_logo && files.image_logo.name){
      //console.log(req.files);
      let file = files.image_logo;
      let fileName = await tools.moveFileWithPath(file,'images')
      data.image_logo = tools.genFileUrl(fileName,'images')
    }
  }
  catch(err){
    next(err);
  }
}