module.exports = (sequelize, type) => {
  var Admin =  sequelize.define('admin', {
      id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      username : type.STRING,
      name : type.STRING,
      email: type.STRING,
      password: type.STRING,
      phone : type.STRING,
      
      
      role_id : type.INTEGER,
      status : {
          type : type.INTEGER,
          defaultValue : 1
      },
      
  },
  {
      
      freezeTableName: true
  })

  Admin.associate = function(models) {
    Admin.belongsTo(models.Role,{foreignKey : 'role_id',constraints: false})
  };

  return Admin
}