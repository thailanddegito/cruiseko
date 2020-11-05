
var [,,method,mode] = process.argv;
const path = require('path')
var config = {}
if(mode === 'test'){
    config.path = path.resolve(process.cwd(), '.env.test') 
}

require('dotenv').config(config)
const {sequelize} = require('../db')




exports.syncDB = async() =>{
    try{
        console.log('Syncing db ->',process.env.DB_NAME)
        await sequelize.sync({force : true})
        console.log('sync db success')
    }
    catch(err){
        console.log(err);
        process.exit(1)
    }
   
}

if(method === 'sync'){
    this.syncDB().then(() => process.exit(0))
}
else {
    console.log('method required')
    process.exit(0)
}