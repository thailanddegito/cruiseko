module.exports = (sequelize, type) => {
    var BoatCategory  = sequelize.define('boat_category', {
      cate_id : {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name : type.STRING,
      code : type.STRING(20),
      type : {
        //#charter, tour
        type :type.STRING(20),
        defaultValue:'tour'
      },
      deleted : {
        type : type.INTEGER,
        defaultValue : 0
      },
    },
    {
        timestamps: true,
        freezeTableName: true
    })
  
    BoatCategory.associate = function(models) {
      BoatCategory.hasMany(models.Boat,{foreignKey : 'cate_id',constraints: false})
    };
    return BoatCategory
  }
  