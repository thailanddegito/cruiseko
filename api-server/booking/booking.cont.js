const { Product,sequelize,PriceDate,
  CompanyType,ProductBoat,Booking,BookingDetail,
  BookingBoat,BookingAddress,User,
  PriceCompanyType,PriceDateDetail, Boat, BoatCategory} = require('../db')
const tools = require('../helper/tools')
const errors = require('../errors')
const {DefaultError} = errors
const {Op} = require('sequelize')
const {getOneProduct} = require('../products/products.cont')
const {calPackagePrice,calDuration} = require('../helper/packageHelper')



exports.getAll = async(req,res,next)=>{
  var {page=1,limit=25} = req.query
  try{
    var where = {}
    var options = {where/* ,logging:console.log */}
    if(!isNaN(page) && page > 1){
      options.offset = (page-1)*limit;
      
      options.limit = limit;
    }
    if(!isNaN(limit)){
        options.limit = parseInt(limit);
    }
    const bookings = await Booking.findAndCountAll(options)
    res.json(bookings)
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
  var {start_time,end_time} = data;
  const _user = req.user;
  var transaction;
  console.log('booking ->',data)
  try{
    if(!date || (!product_id && product_id !== 0)){
      throw new DefaultError(errors.FILEDS_INCOMPLETE);
    }

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
    const {products_boats,is_boat} = product

    if(is_boat == 1){
      if(!start_time || !end_time){
        throw new DefaultError(errors.FILEDS_INCOMPLETE);
      }
    }
    else {
      start_time = product.start_time;
      end_time = product.end_time
    }

    var duration ,rental_start,rental_end,booking_boat_data;

    
      
    var [hour_start,min_start] = start_time.split(':')
    var [hour_end,min_end] = end_time.split(':')
    rental_start = new Date(date) 
    rental_end = new Date(date) 
    rental_start.setHours(hour_start,min_start)
    rental_end.setHours(hour_end,min_end)
    
    duration = calDuration(start_time,end_time)

    /*  
      start_date is between x_start_date and end_date
      end is between x_start_date and end_date
    */

    const ua_boat = await BookingBoat.findAll({where  : {
      boat_id : products_boats[0].boat_id,
      status : 1,
      [Op.or] : [
        {[Op.and] : [{rental_start : {[Op.lte] : rental_start}  },{rental_end : {[Op.gte] : rental_start}  }] },
        {[Op.and] : [{rental_start : {[Op.lte] : rental_end}  },{rental_end : {[Op.gte] : rental_end}  }] }
      ]
    },attributes:['boat_id','amount'] ,raw:true})

    const unavailable_boat = ua_boat.reduce((total,item) => total+item.amount ,0 )
    console.log('Unavailable Boat',unavailable_boat)
    const remain_boat = products_boats[0].amount - unavailable_boat;

    if(remain_boat <= 0){
      throw new DefaultError(errors.INVALID_INPUT);
    }

    booking_boat_data ={
      boat_id : products_boats[0].boat_id,
      rental_start,
      rental_end,
    }
    
    

    const {price,boat_amt} = calPackagePrice(product,user,date,adult,children,duration)
    if(price === -1){
      throw new DefaultError(errors.INVALID_INPUT);
    }

    

    // const boats = await Boat.findAll({where : {boat_id : products_boats.map(val=> val.boat_id) }})

    

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
      payment_status : 1,
      // payment_type : 'CREDIT',
      // payment_date : new Date(),

    }

    console.log('result',booking_data)

    // throw new Error();

    const booking = await Booking.create(booking_data,{transaction})

    if(booking_boat_data){
      booking_boat_data.booking_id = booking.id;
      booking_boat_data.amount = boat_amt;
      await BookingBoat.create(booking_boat_data,{transaction})
    }

    var booking_detail = {
      booking_id : booking.id,
      product_id,
      price ,
      amount : boat_amt

    }
    await BookingDetail.create(booking_detail,{transaction})

    await transaction.commit()
    res.json({success : true,booking : {...booking.toJSON(),name : product.name}})
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

exports.checkAvailableBoat = async(req,res,next)=>{
  var {boat_id,date,start_time,end_time} = req.query;
  try{

    if(!boat_id || !start_time || !end_time ){
      throw new DefaultError(errors.FILEDS_INCOMPLETE);
    }
    const boat = await Boat.findOne({where : {boat_id}})

    if(!boat){
      throw new DefaultError(errors.NOT_FOUND);
    }
    // var [hour_start,min_start] = start_time.split(':')
    // var [hour_end,min_end] = end_time.split(':')
    var rental_start = new Date(start_time) 
    var rental_end = new Date(end_time) 
    // rental_start.setHours(hour_start,min_start)
    // rental_end.setHours(hour_end,min_end)
    const ua_boat = await BookingBoat.findAll({where  : {
      boat_id : boat.boat_id,
      status : 1,
      [Op.or] : [
        {[Op.and] : [{rental_start : {[Op.lte] : rental_start}  },{rental_end : {[Op.gte] : rental_start}  }] },
        {[Op.and] : [{rental_start : {[Op.lte] : rental_end}  },{rental_end : {[Op.gte] : rental_end}  }] }
      ]
    },attributes:['boat_id','amount'] ,raw:true})

    const unavailable_boat = ua_boat.reduce((total,item) => total+item.amount ,0 )
    console.log('Unavailable Boat',unavailable_boat)
    const available_boat = boat.amount - unavailable_boat;

    res.json({success:true,available_boat})
  }
  catch(err){
    next(err);
  }
}