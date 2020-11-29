require('dotenv').config()
const {Admin,Permission,BoatCategory} = require('../db')




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
      {name : 'Bookings' , key : 'bookings' },
      {name : 'Package' , key : 'package' },
      {name : 'Package Category' , key : 'package_category'},
      {name : 'Boat' , key : 'boat' },
      {name : 'Boat Category' , key : 'boat_category'},
      {name : 'Blog' , key : 'blog' },
      {name : 'Blog Category' , key : 'blog_category'},
      {name : 'Users' , key : 'users' },
      {name : 'Company Type' , key : 'company_type'},
      {name : 'Admin' , key : 'admin'},
      {name : 'Admin Role' , key : 'admin_role'}
    ]

    await Permission.sync({force : true})
    

    await Permission.bulkCreate(data)
    console.log('Create permission successfully!')
  }
  catch(err){
    console.log(err)
  }
}

exports.initBoatActivities = async() =>{
  try{
    const data = [
      {name : 'Dinner cruise' , code : 'DC' },
      {name : 'Long Tail Boat' , code : 'LT',type:'charter'},
      {name : 'Charter Yacht' , code : 'CY' ,type:'charter'},
      {name : 'Rice Bargue Boat' , code : 'RB',type:'charter'},
      {name : 'Dive Trip' , code : 'DT' },
      {name : 'Water Sports' , code : 'WS'},
    ]

    await BoatCategory.sync({force : true})
    

    await BoatCategory.bulkCreate(data)
    console.log('Create boat activities successfully!')
  }
  catch(err){
    console.log(err)
  }
}

exports.initDefault = async() =>{
  try{
    await this.initAdmin()
    await this.initPermission();
    await this.initBoatActivities();
    console.log('seeded successfully!')
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
else if(method === 'all'){
  this.initDefault().then(() => process.exit(0))
}
else {
  var methods = ['admin','per','all']
  console.log('method required ',methods)
}