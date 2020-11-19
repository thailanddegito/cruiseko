module.exports = (sequelize, type) => {
  var PriceDateDetail  = sequelize.define('price_date_detail', {
    id : {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    price_date_id : type.INTEGER,
    // tier_id : type.INTEGER,
    company_type_id : type.INTEGER,
    range_start : type.INTEGER,
    range_end : type.INTEGER,
    customer_type : type.STRING,
    price : type.DECIMAL(18,2),
    deposit : type.DECIMAL(18,2),
    commission : type.DECIMAL(18,2),
    
    
    
  },
  {
      timestamps: false,
      freezeTableName: true
  })

  PriceDateDetail.associate = function(models) {
    PriceDateDetail.belongsTo(models.PriceDate,{foreignKey : 'price_date_id',constraints: false})
  };
  return PriceDateDetail
}
