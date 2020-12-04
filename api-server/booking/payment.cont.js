const { Product,sequelize,PriceDate,
  CompanyType,ProductBoat,Booking,BookingDetail,
  BookingBoat} = require('../db')


exports.paypalApprove = async(req,res,next)=>{
  var data = req.body;
  try{
    
  }
  catch(err){
    next(err);
  }
}