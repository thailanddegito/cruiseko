module.exports = (sequelize, type) => {
    var Boat  = sequelize.define('boat', {
      boat_id : {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      cate_id : {
        type : type.INTEGER,
        allowNull : false
      },
      name : type.STRING,
      code : type.STRING(20),
      company : type.STRING,
      price_per_hr :{
        type : type.DECIMAL(12,2),
        defaultValue : 0
      },
      min_hr :{
        type : type.DECIMAL(12,2),
        defaultValue : 0
      },
      amount : {
        type : type.INTEGER,
        allowNull : false,
        defaultValue : 0
      },
      capacity : {
        type : type.INTEGER,
        allowNull : false,
        defaultValue : 0
      },
      time : {
        type : type.INTEGER,
        allowNull : false,
        defaultValue : 0
      },
      picture : type.STRING,
      deleted : {
        type : type.INTEGER,
        defaultValue : 0
      },
      
      
    },
    {
        timestamps: true,
        freezeTableName: true
    })
  
    Boat.associate = function(models) {
      Boat.belongsTo(models.BoatCategory,{foreignKey : 'cate_id',constraints: false})
      Boat.hasMany(models.BoatImage,{foreignKey : 'cate_id',constraints: false})
    };
    return Boat
  }
  