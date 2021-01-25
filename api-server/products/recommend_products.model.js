module.exports = (sequelize, type) => {
  var RecommendProduct  = sequelize.define('rec_products', {
    id : {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cate_key : type.STRING,
    product_id : type.INTEGER
    // deleted : {
    //   type : type.INTEGER,
    //   defaultValue : 0
    // }
  //   price : type.DECIMAL(18,2)
  },
  {
      timestamps: false,
      freezeTableName: true
  })

  RecommendProduct.associate = function(models) {
    // RecommendCate.hasMany(models.User,{foreignKey : 'user_id',constraints: false})
  };
  return RecommendProduct
}
