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
      {name : 'Boat' , key : 'boat' },
      {name : 'Boat Category' , key : 'boat_category'},
      {name : 'Users' , key : 'users' },
      {name : 'Company Type' , key : 'company_type'},
      {name : 'Admin' , key : 'admin'},
      {name : 'Admin Role' , key : 'admin_role'}
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