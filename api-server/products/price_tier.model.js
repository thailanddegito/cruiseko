module.exports = (sequelize, type) => {
  var PriceTier  = sequelize.define('price_tier', {
    id : {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    price_date_id : type.INTEGER,
    price_company_type_id : type.INTEGER,
    range_start : type.INTEGER,
    range_end : type.INTEGER,
    // price : type.DECIMAL(18,2),
    
  },
  {
      timestamps: true,
      freezeTableName: true
  })

  PriceTier.associate = function(models) {
    // PriceTier.belongsTo(models.Product,{foreignKey : 'product_id',constraints: false})
    PriceTier.hasMany(models.PriceDateDetail,{foreignKey : 'tier_id',constraints: false})
  };
  return PriceTier
}
