const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    timezone: '+07:00'
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
}

for (var key of Object.keys(models)) {
    models[key].associate && models[key].associate(models)
}


// console.log(Admin.associate)
// console.log('models',sequelize.models)
// sequelize.sync({alter:true})

module.exports = {
    sequelize,
    ...models
}