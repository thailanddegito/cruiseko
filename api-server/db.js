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

const User = require('./users/users.model')(sequelize,Sequelize)

// sequelize.sync({alter:true})

module.exports = {
    sequelize,
    User
}