const { Product,sequelize,PriceDate,
  CompanyType,ProductBoat,Booking,BookingDetail,PaypalHist,
  BookingBoat} = require('../db')

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

    const result = await verifyEvent(JSON.stringify(data) )
    console.log(result)
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