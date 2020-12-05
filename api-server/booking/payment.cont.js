const { Product,sequelize,PriceDate,
  CompanyType,ProductBoat,Booking,BookingDetail,PaypalHist,
  BookingBoat} = require('../db')
const errors = require('../errors')
const {DefaultError} = errors
var paypal = require('paypal-rest-sdk')
const config = {
  mode: process.env.NODE_ENV === 'dev' ? 'sandbox' : 'sandbox', //sandbox or live
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET
}

paypal.configure(config);


exports.paypalApprove = async(req,res,next)=>{
  var data = req.body;
  console.log('data',data)
  try{

    const {event_type,resource} = data;

    if(!resource){
      throw new DefaultError(errors.FILEDS_INCOMPLETE);
    }

    if(event_type != 'CHECKOUT.ORDER.APPROVED'){
      return res.json({success:true})
    }

    const {purchase_units} = resource
    const booking_id = purchase_units[0].invoice_id;


    const [result,booking] = await Promise.all([
      verifyEvent(JSON.stringify(data) ),
      Booking.findAll({where : {id : booking_id}})
    ])

    if(!result || !booking){
      throw new DefaultError(errors.INVALID_INPUT);
    }

    const {payment_status} = booking;
    if(payment_status == 2){
      return res.json({success:true})
    }

    await Booking.update({ payment_status : 2,payment_date : new Date(),payment_type : 'PAYPAL' },{id : booking_id})

    await PaypalHist.create({text : JSON.stringify({...data, verify_result : result })})
    res.json({success:true})
  }
  catch(err){
    await PaypalHist.create({text : JSON.stringify({err,config})})
    next(err);
  }
}


async function verifyEvent(eventBody){
  return new Promise((resolve,reject) =>{
    paypal.notification.webhookEvent.getAndVerify(eventBody, async function (error, response) {
      if (error) {
          reject(error)
      } else {
          resolve(response)
      }
    });
  })
}