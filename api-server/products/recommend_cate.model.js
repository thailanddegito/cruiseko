module.exports = (sequelize, type) => {
  var RecommendCate  = sequelize.define('rec_cate', {
    key : {
      type: type.STRING,
      primaryKey: true,
    },
    name : type.STRING,
    description : type.TEXT,
    // deleted : {
    //   type : type.INTEGER,
    //   defaultValue : 0
    // }
  //   price : type.DECIMAL(18,2)
  },
  {
      timestamps: true,
      freezeTableName: true
  })

  RecommendCate.associate = function(models) {
    RecommendCate.hasMany(models.RecommendProduct,{foreignKey : 'cate_key',constraints: false})
  };
  return RecommendCate
}
