require('dotenv').config()
const {Admin,Permission} = require('../db')




exports.initAdmin = async () => {
  try{
    const bcrypt = require('bcrypt');
    var data = {
        username : 'superadmin',
        name : 'Superadmin',
        email : 'superadmin@cruiseko.app',
        password : 'secret1234',
        role_id : 0
    }
    data.password = await bcrypt.hash(data.password, 11)

    await Admin.sync({force : true})

    await Admin.create(data)
    console.log('Create superadmin successfully!')
  }
  catch(err){
    console.log(err);
  }
    
}

exports.initPermission = async() =>{
  try{
    const data = [
      {name : 'A1' , key : 'A1' },
      {name : 'A2' , key : 'A2'},
      {name : 'A3' , key : 'A3'},
      {name : 'A4' , key : 'A4'}
    ]

    await Permission.sync({force : true})
    console.log('Create permission successfully!')

    await Permission.bulkCreate(data)
  }
  catch(err){
    console.log(err)
  }
}

var [,,method,arg1] = process.argv;

if(method === 'admin'){
  this.initAdmin().then(() => process.exit(0))
}
else if(method === 'per'){
  this.initPermission().then(() => process.exit(0))
}