module.exports = (sequelize, type) => {
    var Product  = sequelize.define('products', {
      id : {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name : type.STRING,
      price : type.DECIMAL(18,2),
      
    },
    {
        timestamps: true,
        freezeTableName: true
    })
  
    // Product.associate = function(models) {
    //     Product.hasMany(models.RoleHasPermission,{foreignKey : 'role_id',constraints: false})
    // };
    return Product
  }
  