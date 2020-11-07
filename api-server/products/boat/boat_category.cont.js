const {BoatCategory} = require('../../db')


exports.getAll = async(req,res,next)=>{
  try{
      const cates = await BoatCategory.findAll();
      res.json(cates)
  }
  catch(err){
      next(err);
  }
}

exports.getOne = async(req,res,next)=>{
  const cate_id = req.params.id
  try{
      const cate = await BoatCategory.findOne({where : {cate_id}});
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
    await BoatCategory.create(data)
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
    await BoatCategory.update(data,{where : {cate_id}})
    res.json({success:true})
  }
  catch(err){
    next(err)
  }
}

exports.delete = async(req,res,next)=>{
  const cate_id = req.params.id
  try{
    await BoatCategory.destroy({where : {cate_id}})
    res.json({success:true})
  }
  catch(err){
    next(err)
  }
}