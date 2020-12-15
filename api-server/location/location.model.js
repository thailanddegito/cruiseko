module.exports = (sequelize, type) => {
  var Location  = sequelize.define('location', {
    id : {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name : type.STRING,
    code : type.STRING(20),
    lat : type.FLOAT,
    long : type.FLOAT,
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

  Location.associate = function(models) {
    // BoatLocation.hasMany(models.Boat,{foreignKey : 'cate_id',constraints: false})
  };
  return Location
}
