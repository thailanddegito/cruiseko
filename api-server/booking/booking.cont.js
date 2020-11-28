const { Product,sequelize,PriceDate,
  CompanyType,ProductBoat,Booking,BookingDetail,
  BookingBoat,BookingAddress,User,
  PriceCompanyType,PriceDateDetail, Boat, BoatCategory} = require('../db')
const tools = require('../helper/tools')
const errors = require('../errors')
const {DefaultError} = errors
const {Op} = require('sequelize')
const {getOneProduct} = require('../products/products.cont')
const {calPackagePrice} = require('../helper/packageHelper')



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
  var {product_id,adult,children,date} = data;
  var {user_firstname,user_lastname,user_email,user_phone} = data;
  var {address,district,city,province,country,post_code} = data;
  const _user = req.user;
  var transaction;
  try{

    if(!_user){
      throw new DefaultError(errors.INVALID_INPUT);
    }
    const [product,user] = await Promise.all([
      getOneProduct(product_id),
      User.findOne({where : {id : _user.id}})
    ])
    if(!product || !user){
      throw new DefaultError(errors.INVALID_INPUT);
    }
    const {price} = calPackagePrice(product,user,date,adult,children)
    if(price === -1){
      throw new DefaultError(errors.INVALID_INPUT);
    }

    const {products_boats} = product

    const boats = await Boat.findAll({where : {boat_id : products_boats.map(val=> val.boat_id) }})

    transaction = await sequelize.transaction()

    var booking_data = {
      adult,
      children,
      total_person : parseInt(adult) + parseInt(children),
      user_id : user.id,
      user_type : user.user_type,
      user_firstname,
      user_lastname,
      user_email,
      user_phone,
      net_price : price,
      payment_status : 2,
      payment_type : 'CREDIT',
      payment_date : new Date(),

    }

    const booking = await Booking.create(booking_data,{transaction})

    var booking_detail = {
      booking_id : booking.id,
      product_id,
      price ,

    }
    await BookingDetail.create(booking_detail,{transaction})

    await transaction.commit()
    res.json({success : true})
  }
  catch(err){
    next(err);
    if(transaction) await transaction.rollback()
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