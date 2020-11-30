module.exports = (sequelize, type) => {
  var ProductBoat  = sequelize.define('products_boat', {
    id : {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    product_id : {
      type : type.INTEGER,
      allowNull : false
    },
    boat_id : {
      type : type.INTEGER,
      allowNull : false
    },
    
    
  },
  {
      timestamps: true,
      freezeTableName: true
  })

  ProductBoat.associate = function(models) {
    ProductBoat.belongsTo(models.Boat,{foreignKey : 'boat_id',constraints: false})
    ProductBoat.belongsTo(models.Product,{foreignKey : 'product_id',constraints: false})
  };
  return ProductBoat
}
