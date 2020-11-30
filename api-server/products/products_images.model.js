
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
    order : {
      type : type.INTEGER,
      defaultValue:1000
    },
    type : {
      type : type.STRING(30),
      defaultValue :'gallery'
    },
    image : type.STRING,
    
  },
  {
      timestamps: false,
      freezeTableName: true
  })

  return ProductImage
}
