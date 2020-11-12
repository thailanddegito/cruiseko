const {ProductCategory} = require('../db')


exports.getAll = async(req,res,next)=>{
  try{
      const cates = await ProductCategory.findAll({where : {deleted : 0}});
      res.json(cates)
  }
  catch(err){
      next(err);
  }
}

exports.getOne = async(req,res,next)=>{
  const cate_id = req.params.id
  try{
      const cate = await ProductCategory.findOne({where : {cate_id}});
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
    await ProductCategory.create(data)
    res.json({success:true})
  }
  catch(err){
    next(err);
  }
}

exports.update = async(req,res,next)=>{
  const cate_id = req.params.id
  var data = req.body;
  try{
    await ProductCategory.update(data,{where : {cate_id}})
    res.json({success:true})
  }
  catch(err){
    next(err)
  }
}

exports.delete = async(req,res,next)=>{
  const cate_id = req.params.id
  try{
    await ProductCategory.update({deleted : 1},{where : {cate_id}})
    res.json({success:true})
  }
  catch(err){
    next(err)
  }
}