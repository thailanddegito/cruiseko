module.exports = (sequelize, type) => {
  var BookingAddress  = sequelize.define('booking_address', {
    id : {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    booking_id : {
      type: type.STRING,
      allowNull : false
    },
    address : type.STRING,
    district : type.STRING,
    city : type.STRING,
    province : type.STRING,
    country : type.STRING,
    post_code : type.STRING(20),
    
    
  },
  {
      timestamps: false,
      freezeTableName: true
  })

  BookingAddress.associate = function(models) {
    BookingAddress.belongsTo(models.Booking,{foreignKey : 'booking_id',constraints: false})
  };
  return BookingAddress
}
