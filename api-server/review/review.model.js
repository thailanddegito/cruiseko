module.exports = (sequelize, type) => {
  var Review  = sequelize.define('review', {
    id : {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    booking_id : type.STRING(40),
    user_id : type.STRING(40),
    product_id : type.STRING(40),
    title : type.STRING,
    description : type.TEXT,
    image : type.STRING,
    rating : type.INTEGER,
    status : {
      type : type.INTEGER,
      defaultValue : 1
    },
    deleted : {
      type : type.INTEGER,
      defaultValue : 0
    }
  //   price : type.DECIMAL(18,2)
  },
  {
      timestamps: true,
      freezeTableName: true
  })

  Review.associate = function(models) {
    Review.belongsTo(models.Booking,{foreignKey : 'booking_id',constraints: false})
    Review.belongsTo(models.User,{foreignKey : 'user_id',constraints: false})
    // ProductBoat.belongsTo(models.Product,{foreignKey : 'product_id',constraints: false})
  };
  return Review
}
