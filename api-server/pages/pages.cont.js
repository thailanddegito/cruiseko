const {Page} = require('../db')


exports.getAll = async(req,res,next)=>{
  try{
      const pages = await Page.findAll({where : {deleted : 0}});
      res.json(pages)
  }
  catch(err){
      next(err);
  }
}

exports.getOne = async(req,res,next)=>{
  const id = req.params.id
  try{
      const page = await Page.findOne({where : {id}});
      res.json(page)
  }
  catch(err){
      next(err);
  }
}

exports.create = async(req,res,next)=>{
  var data = req.body;
  var {} = data;
  try{
    await Page.create(data)
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
    await Page.update(data,{where : {id}})
    res.json({success:true})
  }
  catch(err){
    next(err)
  }
}

exports.delete = async(req,res,next)=>{
  const id = req.params.id
  try{
    await Page.update({deleted : 1},{where : {id}})
    res.json({success:true})
  }
  catch(err){
    next(err)
  }
}