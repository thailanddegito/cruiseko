module.exports = (sequelize, type) => {
    var PaypalHist  = sequelize.define('paypal_hist', {
      id : {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      text : type.TEXT,
      
      
    },
    {
        timestamps: true,
        freezeTableName: true
    })
  
    PaypalHist.associate = function(models) {
      // BookingDetail.hasMany(models.Boat,{foreignKey : 'cate_id',constraints: false})
    };
    return PaypalHist
  }
  