module.exports = (sequelize, type) => {
  var CompanyType  = sequelize.define('products', {
    id : {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name : type.STRING,
    order : {
      type : type.INTEGER,
      defaultValue : 999
    },
    prefix : type.STRING(3),
    commission_rate : type.DECIMAL(18,2),
    deleted : {
      type : type.INTEGER,
      defaultValue : 0
    }
    
  },
  {
      timestamps: true,
      freezeTableName: true
  })

  // Product.associate = function(models) {
  //     Product.hasMany(models.RoleHasPermission,{foreignKey : 'role_id',constraints: false})
  // };
  return CompanyType
}
