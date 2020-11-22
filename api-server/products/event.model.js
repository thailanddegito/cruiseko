module.exports = (sequelize, type) => {
  var Event  = sequelize.define('event', {
    id : {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    product_id : {
      type : type.INTEGER,
      allowNull : false
    },
    time_title : type.STRING,
    time : type.STRING,
    title : type.STRING,
    description : type.STRING,
    image : type.STRING,
    boat_id : type.INTEGER,
    
    
  },
  {
      timestamps: true,
      freezeTableName: true
  })

  Event.associate = function(models) {
    Event.belongsTo(models.Product,{foreignKey : 'product_id',constraints: false})
    // ProductBoat.belongsTo(models.Product,{foreignKey : 'product_id',constraints: false})
  };
  return Event
}
