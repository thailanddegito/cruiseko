module.exports = (sequelize, type) => {
  var Booking  = sequelize.define('booking', {
    id : {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    // product_id : {
    //   type: type.INTEGER,
    //   allowNull : false
    // },
    user_id : {
      type: type.STRING(40),
      allowNull : false

    },
    user_company_type_name : type.STRING,
    user_type : type.STRING(20),
    total_person : {
      type : type.INTEGER,
      allowNull : false,
      defaultValue : 0
    },
    adult_amt : {
      type : type.INTEGER,
      allowNull : false,
      defaultValue : 0
    },
    children_amt : {
      type : type.INTEGER,
      allowNull : false,
      defaultValue : 0
    },
    net_price : {
      type : type.DECIMAL(18,2),
      allowNull : false,
      defaultValue : 0
    },
    payment_date : type.DATE,
    //CREDIT, TRANSFER
    payment_type : type.STRING,
    trasaction_id : type.STRING,
    
  },
  {
      timestamps: true,
      freezeTableName: true
  })

  Booking.associate = function(models) {
    Booking.hasMany(models.Boat,{foreignKey : 'cate_id',constraints: false})
  };
  return Booking
}
