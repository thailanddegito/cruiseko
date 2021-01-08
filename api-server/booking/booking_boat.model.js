module.exports = (sequelize, type) => {
  var BookingBoat  = sequelize.define('booking_boat', {
    id : {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    booking_id : {
      type: type.STRING,
      allowNull : false
    },
    boat_id : type.INTEGER,
    rental_start : type.DATE,
    rental_end : type.DATE,
    amount : {
      type : type.INTEGER,
      defaultValue : 0
    },
    status : {
      // 0 is cancel
      type : type.INTEGER,
      defaultValue : 1
    }
    
    
  },
  {
      timestamps: false,
      freezeTableName: true
  })

  BookingBoat.associate = function(models) {
    BookingBoat.belongsTo(models.Booking,{foreignKey : 'booking_id',constraints: false})
    BookingBoat.belongsTo(models.Boat,{foreignKey : 'boat_id',constraints: false})
  };
  return BookingBoat
}
