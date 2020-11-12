module.exports = (sequelize, type) => {
  var PriceCalendarDetail  = sequelize.define('price_calendar_detail', {
    id : {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    calendar_id : type.INTEGER,
    company_type_id : type.INTEGER,
    // range_start : type.INTEGER,
    // range_end : type.INTEGER,
    customer_type : type.STRING,
    price : type.DECIMAL(18,2),
    deposit : type.DECIMAL(18,2),
    commission : type.DECIMAL(18,2),
    
    
  },
  {
      timestamps: false,
      freezeTableName: true
  })

  PriceCalendarDetail.associate = function(models) {
    PriceCalendarDetail.belongsTo(models.PriceCalendar,{foreignKey : 'calendar_id',constraints: false})
  };
  return PriceCalendarDetail
}
