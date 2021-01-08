module.exports = (sequelize, type) => {
  var BookingAddon  = sequelize.define('booking_addon', {
    id : {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    booking_id : type.INTEGER,
    product_id : type.INTEGER,
    addon_id : type.INTEGER,
    price : type.DECIMAL(18,2)
  },
  {
      timestamps: false,
      freezeTableName: true
  })

  BookingAddon.associate = function(models) {
    // BookingAddon.belongsTo(models.Product,{foreignKey : 'product_id',constraints: false})
    // ProductBoat.belongsTo(models.Product,{foreignKey : 'product_id',constraints: false})
  };
  return BookingAddon
}
