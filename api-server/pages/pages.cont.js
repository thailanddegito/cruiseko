const {Page,PageWidget} = require('../db')
const tools = require('../helper/tools')
const {Op} = require('sequelize')

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
      const include = [{model : PageWidget}]
      const page = await Page.findOne({where : {[Op.or] : [{id},{path : id}] },include});
      res.json(page)
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
  var files = req.files || {}
  try{
    if(files.image && files.image.name){
      //console.log(req.files);
      let file = files.image;
      let fileName = await tools.moveFileWithPath(file,'images')
      data.image = tools.genFileUrl(fileName,'images')
    }
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

exports.getAllWidget = async(req,res,next)=>{
  var {page_id} = req.query;
  try{
    var where = {}
    if(page_id) where.page_id = page_id
    const widgets = await PageWidget.findAll({where });
    res.json(widgets)
  }
  catch(err){
      next(err);
  }
}

exports.getOneWidget = async(req,res,next)=>{
  var id = req.params.wid
  try{


    const widget = await PageWidget.findOne({where : {id}})
    res.json(widget)
  }
  catch(err){
    next(err);
  }
}

exports.createWidget = async(req,res,next)=>{
  var data = req.body;
  var files = req.files || {}
  try{

    if(files.image1 && files.image1.name){
      //console.log(req.files);
      let file = files.image1;
      let fileName = await tools.moveFileWithPath(file,'images')
      data.image1 = tools.genFileUrl(fileName,'images')
    }
    if(files.image2 && files.image2.name){
      //console.log(req.files);
      let file = files.image2;
      let fileName = await tools.moveFileWithPath(file,'images')
      data.image2 = tools.genFileUrl(fileName,'images')
    }

    await PageWidget.create(data)
    res.json({success:true})
  }
  catch(err){
    next(err);
  }
}

exports.updateWidget = async(req,res,next)=>{
  var data = req.body;
  var files = req.files || {}
  var id = req.params.wid
  try{

    if(files.image1 && files.image1.name){
      //console.log(req.files);
      let file = files.image1;
      let fileName = await tools.moveFileWithPath(file,'images')
      data.image1 = tools.genFileUrl(fileName,'images')
    }
    if(files.image2 && files.image2.name){
      //console.log(req.files);
      let file = files.image2;
      let fileName = await tools.moveFileWithPath(file,'images')
      data.image2 = tools.genFileUrl(fileName,'images')
    }

    await PageWidget.update(data,{where : {id}})
    res.json({success:true})
  }
  catch(err){
    next(err);
  }
}

exports.deleteWidget = async(req,res,next)=>{
  var id = req.params.wid
  try{
    await PageWidget.destroy({where : {id}})
    res.json({success:true})
  }
  catch(err){
    next(err)
  }
}
