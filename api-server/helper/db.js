
var [,,method,mode] = process.argv;
const path = require('path')
var config = {}
if(mode === 'test'){
    config.path = path.resolve(process.cwd(), '.env.test') 
}

require('dotenv').config(config)
const DB = require('../db')
const {sequelize} = DB
const {Booking,BookingAddress,BookingDetail,BookingBoat} = DB


exports.syncDB = async({alter}) =>{
    try{
        console.log('Syncing db ->',process.env.DB_NAME,`(${alter ? 'alter' : 'force' })`)
        var options = {}
        if(alter) options.alter = true;
        else options.force = true;
        await sequelize.sync(options)
        console.log('sync db success')
    }
    catch(err){
        console.log(err);
        process.exit(1)
    }
   
}
exports.clearBooking = async() =>{
    try{
        console.log('clearing booking data')
        await Promise.all([
            Booking.sync({force:true}),
            BookingAddress.sync({force:true}),
            BookingDetail.sync({force:true}),
            BookingBoat.sync({force:true})
        ])
        console.log('clear booking success')
    }
    catch(err){
        console.log(err);
        process.exit(1)
    }
}

if(method === 'sync'){
    this.syncDB({}).then(() => process.exit(0))
}
else if(method === 'sync-alter'){
    this.syncDB({alter : true}).then(() => process.exit(0))
}
else if(method === 'clear-booking'){
    this.clearBooking().then(() => process.exit(0))
}
else {
    console.log('method required')
    process.exit(0)
}