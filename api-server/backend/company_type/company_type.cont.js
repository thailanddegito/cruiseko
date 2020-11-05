const {CompanyType} = require('../../db')
const errors = require('../../errors')
const {DefaultError} = errors

exports.getAll = async(req,res,next)=>{
  try{
      
    var order = [['order'],'asc']
    const com_types = await CompanyType.findAll({order} )
    res.json(com_types)
  }
  catch(err){
      next(err);
  }
}

exports.getOne = async(req,res,next)=>{
  const id = req.params.id
  try{
      
    const com_type = await CompanyType.findOne({where : {id}} )
    res.json(com_type)
  }
  catch(err){
      next(err);
  }
}

exports.create = async(req,res,next)=>{
  var data = req.body;
  var {prefix,name,commission_rate} = data;
  try{
    if(!prefix || !name || ! commission_rate){
      throw new DefaultError(errors.FILEDS_INCOMPLETE);
    }

    await CompanyType.create(data)
    res.json({success : true})
  }
  catch(err){
    next(err);
  }
}

exports.update = async(req,res,next)=>{
  const id = req.params.id
  var data = req.body;
  try{
    await CompanyType.update(data,{where :  {id}})
    res.json({success : true})
  }
  catch(err){
    next(err);
  }
}

exports.delete = async(req,res,next)=>{
  const id = req.params.id
  try{
    await CompanyType.update({deleted : 1},{where :  {id}})
    res.json({success : true})
  }
  catch(err){
    next(err);
  }
}

exports.updateOrder = async(req,res,next)=>{
  var {orders} = req.body;
  try{
    if(!orders){
      throw new DefaultError(errors.FILEDS_INCOMPLETE);
    }
    let task = []
    orders.forEach((val)=>{
        task.push(CompanyType.update({order : val.order },{where : {id : val.id}}))
    } )
    await Promise.all(task);
    res.json({success : true})
  }
  catch(err){
    next(err);
  }
}