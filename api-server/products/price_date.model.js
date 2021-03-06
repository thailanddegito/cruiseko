module.exports = (sequelize, type) => {
  var PriceDate  = sequelize.define('price_date', {
    id : {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    product_id : type.INTEGER,
    start_date : type.DATEONLY,
    end_date : type.DATEONLY,
    pricing_type : {
      //can be ( normal , tier )
      type : type.STRING(20),
      defaultValue : 'normal'
    },
    cost : type.DECIMAL(18,2),
    // price : type.DECIMAL(18,2),
    
  },
  {
      timestamps: true,
      freezeTableName: true
  })

  PriceDate.associate = function(models) {
    PriceDate.belongsTo(models.Product,{foreignKey : 'product_id',constraints: false})
    PriceDate.hasMany(models.PriceDateDetail,{foreignKey : 'price_date_id',constraints: false})
    PriceDate.hasMany(models.PriceCompanyType,{foreignKey : 'price_date_id',constraints: false})
  };
  return PriceDate
}
