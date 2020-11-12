module.exports = (sequelize, type) => {
  var ProductCategory  = sequelize.define('products_category', {
    cate_id : {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name : type.STRING,
    code : type.STRING(20),
    deleted : {
      type : type.INTEGER,
      defaultValue : 0
    },
  },
  {
      timestamps: true,
      freezeTableName: true
  })

  ProductCategory.associate = function(models) {
    ProductCategory.hasMany(models.Product,{foreignKey : 'cate_id',constraints: false})
  };
  return ProductCategory
}
