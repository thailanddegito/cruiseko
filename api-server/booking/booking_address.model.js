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
    user_id : {
      type: type.STRING,
      allowNull : false
    },
    address : type.STRING,
    sub_district : type.STRING,
    district : type.STRING,
    province : type.STRING,
    postal_code : type.STRING(20),
    
    
  },
  {
      timestamps: true,
      freezeTableName: true
  })

  BookingAddress.associate = function(models) {
    BookingAddress.belongsTo(models.Booking,{foreignKey : 'booking_id',constraints: false})
  };
  return BookingAddress
}
