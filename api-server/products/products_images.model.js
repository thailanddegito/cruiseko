module.exports = (sequelize, type) => {
  var ProductImage  = sequelize.define('products_images', {
    id : {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    product_id : {
      type : type.INTEGER,
      allowNull : false
    },
    image : type.STRING,
    
  },
  {
      timestamps: false,
      freezeTableName: true
  })

  return ProductImage
}