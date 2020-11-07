module.exports = (sequelize, type) => {
    var BoatImage  = sequelize.define('boat_images', {
      id : {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      boat_id : {
        type : type.INTEGER,
        allowNull : false
      },
      image : type.STRING,
      
    },
    {
        timestamps: true,
        freezeTableName: true
    })
  
    return BoatImage
  }
  