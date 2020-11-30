module.exports = (sequelize, type) => {
  var BookingDetail  = sequelize.define('booking_detail', {
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
    price : {
      type : type.DECIMAL(18,2),
      defaultValue : 0
    }
    
    
  },
  {
      timestamps: false,
      freezeTableName: true
  })

  BookingDetail.associate = function(models) {
    // BookingDetail.hasMany(models.Boat,{foreignKey : 'cate_id',constraints: false})
  };
  return BookingDetail
}
