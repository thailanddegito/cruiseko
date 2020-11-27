const { Product,ProductImage,sequelize,PriceDate,
  CompanyType,ProductBoat,Booking,BookingDetail,
  PriceCompanyType,PriceDateDetail, Boat, BoatCategory} = require('../db')
const tools = require('../helper/tools')
const errors = require('../errors')
const {DefaultError} = errors
const {Op} = require('sequelize')



exports.getAll = async(req,res,next)=>{
  
  try{

  } 
  catch(err){
    next(err);
  }
}

exports.getOne = async(req,res,next)=>{
  const id  = req.params.id;
  try{

    const include = [
      {model : BookingDetail}
    ]

    const booking = await Booking.findOne({where : {id},include})
    res.json(booking)
  } 
  catch(err){
    next(err);
  }
}


exports.create = async(req,res,next)=>{
  var data = req.body;
  try{

  }
  catch(err){
    next(err);
  }
}

exports.update = async(req,res,next)=>{
  var data = req.body;
  const id  = req.params.id;
  try{

  }
  catch(err){
    next(err);
  }
}