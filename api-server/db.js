const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
        
    },
    logging: false,
    // timezone: 'Asia/Bangkok'
});



// (async () =>{
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } 
//     catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// })()
const models = {
    User :  require('./users/users.model')(sequelize,Sequelize),
    Admin : require('./admins/admins.model')(sequelize,Sequelize),
    Role : require('./admins/roles.model')(sequelize,Sequelize),
    RoleHasPermission : require('./admins/role_has_permission.model')(sequelize,Sequelize),
    Permission : require('./admins/permission.model')(sequelize,Sequelize),
    CompanyType : require('./backend/company_type/company_type.model')(sequelize,Sequelize),
    Product : require('./products/products.model')(sequelize,Sequelize),
    Boat : require('./products/boat/boat.model')(sequelize,Sequelize),
    BoatCategory : require('./products/boat/boat_category.model')(sequelize,Sequelize),
    
}

for (var key of Object.keys(models)) {
    models[key].associate && models[key].associate(models)
}


// console.log(Admin.associate)
// console.log('models',sequelize.models)
// models.Admin.sync({force : true})
// models.Permission.sync({force : true})
// models.User.sync({force : true})
// models.CompanyType.sync({force : true})
// sequelize.sync({alter:true})
// .then(() => console.log('Sync db success') )


//Create super admin
// (async ()=>{
//     const bcrypt = require('bcrypt');
//     var data = {
//         username : 'superadmin',
//         name : 'Superadmin',
//         email : 'superadmin@cruiseko.app',
//         password : 'secret1234',
//         role_id : 0
//     }
//     data.password = await bcrypt.hash(data.password, 11)
//     await models.Admin.create(data)
//     console.log('Create superadmin successfully!')
// } )()

module.exports = {
    sequelize,
    ...models
}