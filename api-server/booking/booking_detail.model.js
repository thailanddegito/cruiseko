module.exports = (sequelize, type) => {
  var Booking  = sequelize.define('booking', {
    id : {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    booking_id : {
      type: type.INTEGER,
      allowNull : false
    },
    product_id : {
      type: type.INTEGER,
      allowNull : false
    },
    
    
  },
  {
      timestamps: false,
      freezeTableName: true
  })

  Booking.associate = function(models) {
    Booking.hasMany(models.Boat,{foreignKey : 'cate_id',constraints: false})
  };
  return Booking
}
