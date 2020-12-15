const {Location} = require('../db')


exports.getAll = async(req,res,next)=>{
  try{
      const locs = await Location.findAll({where : {deleted : 0}});
      res.json(locs)
  }
  catch(err){
      next(err);
  }
}

exports.getOne = async(req,res,next)=>{
  const id = req.params.id
  try{
      const loc = await Location.findOne({where : {id}});
      res.json(loc)
  }
  catch(err){
      next(err);
  }
}

exports.create = async(req,res,next)=>{
  var data = req.body;
  var {} = data;
  try{
    await Location.create(data)
    res.json({success:true})
  }
  catch(err){
    next(err);
  }
}

exports.update = async(req,res,next)=>{
  const id = req.params.id
  var data = req.body;
  try{
    await Location.update(data,{where : {id}})
    res.json({success:true})
  }
  catch(err){
    next(err)
  }
}

exports.delete = async(req,res,next)=>{
  const id = req.params.id
  try{
    await Location.update({deleted : 1},{where : {id}})
    res.json({success:true})
  }
  catch(err){
    next(err)
  }
}