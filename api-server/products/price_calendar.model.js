module.exports = (sequelize, type) => {
  var PriceCalendar  = sequelize.define('price_calendar', {
    id : {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    product_id : type.INTEGER,
    start_date : type.DATE,
    end_date : type.DATE,
    // price : type.DECIMAL(18,2),
    
  },
  {
      timestamps: true,
      freezeTableName: true
  })

  PriceCalendar.associate = function(models) {
    PriceCalendar.belongsTo(models.Product,{foreignKey : 'product_id',constraints: false})
    PriceCalendar.hasMany(models.PriceCalendarDetail,{foreignKey : 'calendar_id',constraints: false})
  };
  return PriceCalendar
}
