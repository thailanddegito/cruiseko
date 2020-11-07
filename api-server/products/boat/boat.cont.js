const {Boat,BoatCategory,BoatImage} = require('../../db')
const tools = require('../../helper/tools')
const errors = require('../../errors')
const {DefaultError} = errors

exports.getAll = async(req,res,next)=>{
  try{
      const cates = await Boat.findAll();
      res.json(cates)
  }
  catch(err){
      next(err);
  }
}

exports.getOne = async(req,res,next)=>{
  const boat_id = req.params.id
  try{
      const cate = await Boat.findOne({where : {boat_id}});
      res.json(cate)
  }
  catch(err){
      next(err);
  }
}

exports.create = async(req,res,next)=>{
  var data = req.body;
  var {} = data;
  try{
    await Boat.create(data)
    res.json({success:true})
  }
  catch(err){
    next(err);
  }
}

exports.update = async(req,res,next)=>{
  const boat_id = req.params.id
  var data = req.body;
  try{
    await Boat.update(data,{where : {boat_id}})
    res.json({success:true})
  }
  catch(err){
    next(err)
  }
}

exports.delete = async(req,res,next)=>{
  const boat_id = req.params.id
  try{
    await Boat.destroy({where : {boat_id}})
    res.json({success:true})
  }
  catch(err){
    next(err)
  }
}


//Boat Image***************


exports.createImage = async(req,res,next)=>{
  // var data = req.body;
  // var {} = data;
  var {boat_id} = req.params
  var files = req.files || {}
  try{
    if(files.image && files.image.name){
      //console.log(req.files);
      let file = files.image;
      let fileName = await tools.moveFileWithPath(file,'images')
      data.image = tools.genFileUrl(fileName,'images')
    }
    data.boat_id = boat_id
    if(!data.image) {
      throw new DefaultError(errors.FILEDS_INCOMPLETE);
    }

    await BoatImage.create(data)
    res.json({success:true})
  }
  catch(err){
    next(err);
  }
}

exports.updateImage = async(req,res,next)=>{
  const {boat_id,id} = req.params
  var data = req.body;
  var files = req.files || {}
  try{
    if(files.image && files.image.name){
      //console.log(req.files);
      let file = files.image;
      let fileName = await tools.moveFileWithPath(file,'images')
      data.image = tools.genFileUrl(fileName,'images')
    }
    if(!data.image) {
      throw new DefaultError(errors.FILEDS_INCOMPLETE);
    }
    await BoatImage.update(data,{where : {boat_id , id}})
    res.json({success:true})
  }
  catch(err){
    next(err)
  }
}

exports.deleteImage = async(req,res,next)=>{
  const {boat_id,id} = req.params
  try{
    await BoatImage.destroy({where : {boat_id,id}})
    res.json({success:true})
  }
  catch(err){
    next(err)
  }
}