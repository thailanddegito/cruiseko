module.exports = (sequelize, type) => {
  var PriceCompanyType  = sequelize.define('price_company_type', {
    id : {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    company_type_id : type.INTEGER,
    price_date_id : type.INTEGER,
    // price : type.DECIMAL(18,2),
    
  },
  {
      timestamps: true,
      freezeTableName: true
  })

  PriceCompanyType.associate = function(models) {
    // PriceTier.belongsTo(models.Product,{foreignKey : 'product_id',constraints: false})
    PriceCompanyType.hasMany(models.PriceTier,{foreignKey : 'price_company_type_id',constraints: false})
  };
  return PriceCompanyType
}
