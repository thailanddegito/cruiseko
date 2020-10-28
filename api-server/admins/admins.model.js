module.exports = (sequelize, type) => {
  var Admin =  sequelize.define('admin', {
      id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      username : {
        type : type.STRING,
        unique: true
      },
      name : type.STRING,
      email: {
        type : type.STRING,
        unique: true
      },
      password: type.STRING,
      phone : type.STRING,
      
      
      role_id : type.INTEGER,
      status : {
          type : type.INTEGER,
          defaultValue : 1
      },
      
  },
  {
      paranoid:true,
      freezeTableName: true
  })

  Admin.associate = function(models) {
    Admin.belongsTo(models.Role,{foreignKey : 'role_id',constraints: false})
  };

  return Admin
}