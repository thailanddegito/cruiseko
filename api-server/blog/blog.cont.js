const {sequelize,Blog,BlogCategory} = require('../db')
const tools = require('../helper/tools')
const errors = require('../errors')
const {DefaultError} = errors
const {Op} = require('sequelize')

exports.getAll = async (req,res,next)=>{
  var {page=1,limit=25,cate_id,search} = req.query
  try{
    var where = {}
    if(cate_id) where.cate_id = cate_id

    if(search){
      where.name = {[Op.like] : `%${search}%` }
    }

    const include =[
      {model:BlogCategory}
    ]

    var options = {where,include/* ,logging:console.log */}
    if(!isNaN(page) && page > 1){
      options.offset = (page-1)*limit;
      
      options.limit = limit;
    }
    if(!isNaN(limit)){
        options.limit = parseInt(limit);
    }

    const blogs = await Blog.findAndCountAll(options)
    res.json(blogs)
  }
  catch(err){
    next(err);
  }
}
exports.getOne = async (req,res,next)=>{
  const id = req.params.id
  try{
    
    const blog = await Blog.findOne({where : {id}})
    res.json(blog)
  }
  catch(err){
    next(err);
  }
}
exports.create = async (req,res,next)=>{
  var data = req.body;
  var files = req.files || {}
  try{
    if(files.picture && files.picture){
      let file = files.picture;
      let fileName = await tools.moveFileWithPath(file,'images')
      data.picture = tools.genFileUrl(fileName,'images')
    }
    await Blog.create(data)
    res.json({success : true})
  }
  catch(err){
    next(err);
  }
}
exports.update = async (req,res,next)=>{
  const id = req.params.id
  var data = req.body;
  var files = req.files || {}
  try{
    if(files.picture && files.picture){
      let file = files.picture;
      let fileName = await tools.moveFileWithPath(file,'images')
      data.picture = tools.genFileUrl(fileName,'images')
    }
    await Blog.update(data,{where : {id : id}})
    res.json({success : true})
  }
  catch(err){
    next(err);
  }
}
exports.delete = async (req,res,next)=>{
  const id = req.params.id
  try{
    await Blog.destroy({where : {id}})
    res.json({success : true})
  }
  catch(err){
    next(err);
  }
}


// Category

exports.getAllCate = async (req,res,next)=>{
  try{
    const items = await BlogCategory.findAll({where : {deleted : 0}})
    res.json(items)
  }
  catch(err){
    next(err);
  }
}
exports.getOneCate = async (req,res,next)=>{
  const cate_id = req.params.cate_id
  try{
    const item = await BlogCategory.findOne({where : { cate_id}})
    res.json(item)
  }
  catch(err){
    next(err);
  }
}
exports.createCate = async (req,res,next)=>{
  var data = req.body;
  try{
    await BlogCategory.create(data)
    res.json({success : true})
  }
  catch(err){
    next(err);
  }
}
exports.updateCate = async (req,res,next)=>{
  const cate_id = req.params.cate_id
  var data = req.body;
  try{
    await BlogCategory.update(data,{where : {cate_id}})
    res.json({success : true})
  }
  catch(err){
    next(err);
  }
}
exports.deleteCate = async (req,res,next)=>{
  const cate_id = req.params.cate_id
  try{
    await BlogCategory.update({deleted : 1},{where : {cate_id}})
    res.json({success : true})
  }
  catch(err){
    next(err);
  }
}