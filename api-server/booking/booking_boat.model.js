module.exports = (sequelize, type) => {
  var BookingBoat  = sequelize.define('booking_boat', {
    id : {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    booking_id : {
      type: type.INTEGER,
      allowNull : false
    },
    boat_id : type.INTEGER,
    
    
    
  },
  {
      timestamps: false,
      freezeTableName: true
  })

  BookingBoat.associate = function(models) {
    BookingBoat.belongsTo(models.Booking,{foreignKey : 'booking_id',constraints: false})
  };
  return BookingBoat
}
